import React from 'react'
import { defineMessages } from 'react-intl'
import links from 'helpers/links'
import externalConfig from 'helpers/externalConfig'


export const messages = defineMessages({
  products: {
    id: 'menu.products',
    description: 'Menu item "Wallet"',
    defaultMessage: 'Our products',
  },
  wallet: {
    id: 'menu.wallet',
    description: 'Menu item "Wallet"',
    defaultMessage: 'Wallet',
  },
  createWallet: {
    id: 'menu.CreateWallet',
    description: 'Menu item "Wallet"',
    defaultMessage: 'Create wallet',
  },
  exchange: {
    id: 'menu.exchange',
    description: 'Menu item "Exchange"',
    defaultMessage: 'Exchange',
  },
  history: {
    id: 'menu.history',
    description: 'Menu item "History"',
    defaultMessage: 'Transactions',
  },
  marketmaker: {
    id: 'menu.marketmaker',
    description: 'Menu item "Marketmaker"',
    defaultMessage: 'Marketmaker',
  },
  farm: {
    id: 'menu.farm',
    description: 'Menu item "Staking & Farming"',
    defaultMessage: 'Farming',
  },
  invest: {
    id: 'menu.invest.info',
    description: 'Menu item "Transactions"',
    defaultMessage: 'How to invest?',
  },
  investMobile: {
    id: 'menu.invest',
    description: 'Menu item "Transactions"',
    defaultMessage: 'Invest',
  },
})

export const getMenuItems = (props) => {
  const { intl } = props
  const { exchange, wallet, createWallet } = messages
  const { 
    exchange: linksExchange,
    createWallet: create,
    farm,
    history,
    home,
  } = links

  const itemsWithWallet = [
    {
      title: intl.formatMessage(wallet),
      link: home,
      exact: true,
      currentPageFlag: true,
    },
    {
      title: intl.formatMessage(messages.history),
      link: history,
      exact: true,
      currentPageFlag: true,
    },
    !externalConfig.opts.exchangeDisabled && {
      title: intl.formatMessage(exchange),
      link: linksExchange,
      exact: false,
      currentPageFlag: true,
    },
  ]

  const itemsWithoutWallet = [
    {
      title: intl.formatMessage(createWallet),
      link: create,
      exact: true,
      currentPageFlag: true,
    },
    !externalConfig.opts.exchangeDisabled && {
      title: intl.formatMessage(exchange),
      link: linksExchange,
      exact: false,
      currentPageFlag: true,
    },
  ]

  // Marketmaker testnet ********
  if (externalConfig.entry === `testnet`) {
    const marketmakerItem = {
      title: intl.formatMessage(messages.marketmaker),
      link: links.marketmaker,
      exact: true,
      currentPageFlag: true,
    }

    itemsWithWallet.push(marketmakerItem)
    itemsWithoutWallet.push(marketmakerItem)
  }

  // Farm ************************
  if (externalConfig.entry === 'testnet') {
    const farmItem = {
      title: intl.formatMessage(messages.farm),
      link: farm,
      isExternal: true,
      exact: true,
      currentPageFlag: true,
    }

    itemsWithWallet.push(farmItem)
    itemsWithoutWallet.push(farmItem)
  }

  return localStorage.getItem('isWalletCreate') === 'true'
    || externalConfig && externalConfig.isWidget
      ? itemsWithWallet
      : itemsWithoutWallet
}


export const getMenuItemsMobile = (props, isWalletCreate, dinamicPath) => {
  const { intl } = props
  const { exchange, wallet, createWallet } = messages
  const { 
    exchange: linksExchange,
    farm,
    history,
  } = links

  const mobileItemsWithWallet = [
    {
      title: intl.formatMessage(isWalletCreate ? wallet : createWallet),
      link: dinamicPath,
      exact: true,
      icon: <i className="fa fa-home" aria-hidden="true" />,
    },
    {
      title: props.intl.formatMessage(messages.history),
      link: history,
      displayNone: !isWalletCreate,
      icon: <i className="fas fa-exchange-alt" aria-hidden="true" />,
    },
    !externalConfig.opts.exchangeDisabled && {
      title: intl.formatMessage(exchange),
      link: linksExchange,
      exact: false,
      icon: <i className="fas fa-sync-alt" aria-hidden="true" />,
    },
  ]

  const mobileItemsWithoutWallet = [
    {
      title: intl.formatMessage(createWallet),
      link: dinamicPath,
      exact: true,
      icon: <i className="fa fa-home" aria-hidden="true" />,
    },
    !externalConfig.opts.exchangeDisabled && {
      title: intl.formatMessage(exchange),
      link: linksExchange,
      exact: false,
      icon: <i className="fas fa-sync-alt" aria-hidden="true" />,
    },
  ]

  // Farm ************************
  if (externalConfig.entry === 'testnet') {
    const farmItem = {
      title: props.intl.formatMessage(messages.farm),
      link: farm,
      isExternal: true,
      exact: true,
      icon: <i className="fas fa-coins" aria-hidden="true" />,
    }

    mobileItemsWithWallet.push(farmItem)
    mobileItemsWithoutWallet.push(farmItem)
  }

  return localStorage.getItem('isWalletCreate') === 'true'
      ? mobileItemsWithWallet
      : mobileItemsWithoutWallet
}

