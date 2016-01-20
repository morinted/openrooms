import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { t } from '../i18n'

export default class Header extends Component {
  render () {
    return (
      <header className="cwc-header">
        {t('_brand-styled')}
      </header>
    )
  }
}
Header.PropTypes = { loggedIn: PropTypes.boolean
                   , logout: PropTypes.func
                   , url: PropTypes.string
                   , username: PropTypes.string
                   }
