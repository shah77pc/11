// swaponline.github.io
/*
window.widgetERC20Tokens = {
  usdt: {
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    decimals: 6,
    fullName: 'Usdt'
  },
  // Symbol of ERC20 token in lowerCase
  proxima: {
    // Address of ERC20 contract
    address: '0xc060b26e60698e91a6acc84051a26b32e38dd1a4',
    // Count of decimals after dot
    decimals: 18,
    // Display name in wallet (By default - its symbol of ERC20, but can be other userfriendy text)
    fullName: 'Proxima',
    // Icon of currency (image)
    icon: 'https://growup.wpmix.net/wp-content/uploads/2016/10/favicon.png',
    // Background color of icon
    iconBgColor: '#ccc',
  },
}

window.buildOptions = {
  ownTokens: false, // Will be inited from window.widgetERC20Tokens
  addCustomERC20: false, // Allow user add custom erc20 tokens
  curEnabled: { // Or 'false' if enabled all
    btc: true,
    eth: true,
  },
  showWalletBanners: true, // Allow to see banners
  invoiceEnabled: false, // Allow create invoices
}
*/


window.buildOptions = {
  showWalletBanners: true, // Allow to see banners
  showHowItsWork: true, // Allow show block 'How its work' on exchange page
  curEnabled: {
    btc: true,
    eth: true,
    ghost: true,
    next: true,
  },
  blockchainSwapEnabled: {
    btc: true,
    eth: false,
    ghost: false,
    next: false,
  },
  defaultExchangePair: {
    buy: 'wbtc',
    sell: 'btc',
  }
}
