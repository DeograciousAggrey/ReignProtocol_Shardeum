//SPDX-License-Identifier: MIT

pragma solidity 0.8.4;

import "../../interfaces/IAuthorizeUser.sol";
import {BaseUpgradeablePausable} from "../BaseUpgradeablePausable.sol";
import {ReignConfig} from "../ReignConfig.sol";
import {ConfigHelper} from "../ConfigHelper.sol";
import {Constants} from "../Constants.sol";

contract AuthorizeUser is BaseUpgradeablePausable, IAuthorizeUser {
    /////////////////////////////////////////////
    /////////  ERROR MESSAGES    ////////////////
    /////////////////////////////////////////////
    error UnauthorizedUser__InvalidAddress();

    ReignConfig private reignConfig;
    using ConfigHelper for ReignConfig;
    mapping(address => bool) public authorizedUserList;

    event AuthorizedUserListed(address indexed member);
    event AuthorizedUserUnlisted(address indexed member);

    function initialize(ReignConfig _reignConfig) public initializer {
        if(address(_reignConfig) == address(0)) revert UnauthorizedUser__InvalidAddress();
        reignConfig = ReignConfig(_reignConfig);
        address owner = reignConfig.reignAdminAddress();
        if(owner == address(0)) revert UnauthorizedUser__InvalidAddress();

        _BaseUpgradeablePausable_init(owner);
        _setupRole(Constants.getAuthorizeUserRole(), owner);
        _setRoleAdmin(Constants.getAuthorizeUserRole(), Constants.getAdminRole());
        
    }

}
