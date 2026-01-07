pragma solidity ^0.5.0;

// pull directly from OZ v2.5.1 on GitHub
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v2.5.1/contracts/math/SafeMath.sol";
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v2.5.1/contracts/token/ERC20/ERC20.sol";
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v2.5.1/contracts/token/ERC20/ERC20Detailed.sol";

contract MyToken is ERC20, ERC20Detailed {
    using SafeMath for uint256;

    address payable public feeWallet;
    uint256 public feePercentage;
    uint256 public fixedEthFeeInWei;

    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address recipient,
        address payable _feeWallet,
        uint256 _feePercentage,
        uint256 _fixedEthFeeInWei
    )
        public
        ERC20Detailed(name, symbol, 18)
    {
        feeWallet = _feeWallet;
        feePercentage = _feePercentage;
        fixedEthFeeInWei = _fixedEthFeeInWei;

        uint256 base = initialSupply.mul(10 ** uint256(decimals()));
        _mint(recipient, base);
        _mint(_feeWallet, base.mul(_feePercentage).div(100));
    }

    // (optional overrides—ERC20 already gives you transfer/approve, so you can omit these)
}
