//SPDX-License-Identifier: MIT

pragma solidity 0.8.4;

import {BaseUpgradeablePausable} from "./BaseUpgradeablePausable.sol";
import {ReignConfig} from "./ReignConfig.sol";
import {IOpportunityPool} from "../interfaces/IOpportunityPool.sol";
import {IOpportunityManager} from "../interfaces/IOpportunityManager.sol";
import {CollateralToken} from "./CollateralToken.sol";
import {IReignKeeper} from "../interfaces/IReignKeeper.sol";
import {IERC721Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC721/IERC721Upgradeable.sol";
import {Constants} from "./Constants.sol";
