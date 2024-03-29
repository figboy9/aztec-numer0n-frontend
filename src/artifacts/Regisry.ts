
/* Autogenerated file, do not edit! */

/* eslint-disable */
import {
  AztecAddress,
  AztecAddressLike,
  CompleteAddress,
  Contract,
  ContractArtifact,
  ContractBase,
  ContractFunctionInteraction,
  ContractMethod,
  DeployMethod,
  EthAddress,
  EthAddressLike,
  FieldLike,
  Fr,
  Point,
  PublicKey,
  Wallet,
} from '@aztec/aztec.js';
import RegisryContractArtifactJson from './Regisry.json' assert { type: 'json' };
export const RegisryContractArtifact = RegisryContractArtifactJson as ContractArtifact;

/**
 * Type-safe interface for contract Regisry;
 */
export class RegisryContract extends ContractBase {
  
  private constructor(
    completeAddress: CompleteAddress,
    wallet: Wallet,
    portalContract = EthAddress.ZERO
  ) {
    super(completeAddress, RegisryContractArtifact, wallet, portalContract);
  }
  

  
  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(
    address: AztecAddress,
    wallet: Wallet,
  ) {
    return Contract.at(address, RegisryContract.artifact, wallet) as Promise<RegisryContract>;
  }

  
  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(wallet: Wallet, ) {
    return new DeployMethod<RegisryContract>(Point.ZERO, wallet, RegisryContractArtifact, Array.from(arguments).slice(1));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public key to derive the address.
   */
  public static deployWithPublicKey(publicKey: PublicKey, wallet: Wallet, ) {
    return new DeployMethod<RegisryContract>(publicKey, wallet, RegisryContractArtifact, Array.from(arguments).slice(2));
  }
  

  
  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return RegisryContractArtifact;
  }
  

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public methods!: {
    
    /** add_game(game_contract: field) */
    add_game: ((game_contract: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** compute_note_hash_and_nullifier(contract_address: field, nonce: field, storage_slot: field, serialized_note: array) */
    compute_note_hash_and_nullifier: ((contract_address: FieldLike, nonce: FieldLike, storage_slot: FieldLike, serialized_note: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_current_count() */
    get_current_count: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_game_address() */
    get_game_address: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
  };
}
