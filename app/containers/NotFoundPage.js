import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import { t } from '../i18n'
import TranslateHtml from '../components/TranslateHtml'
export default class NotFoundPage extends Component {
  componentDidMount () {
    document.title = `${t('title.not-found')} | ${t('_brand-styled')}`
  }
  render () {
    return (
      <Panel header={<h3>{t('title.not-found')}</h3>}>
        <p><TranslateHtml translateKey="html-not-found-message"/></p>
      </Panel>
    )
  }
}
