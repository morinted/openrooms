import React, { Component } from 'react'
import { t } from '../i18n'

class TranslateHtml extends Component {
  render () {
    /**
    * In order to support HTML from translations, we have to
    * dangerously set the HTML. The risk involved is that if
    * a key isn't matched, then it is used directly. Therefore,
    * we need to check that the translation succeeds in order to
    * render something. If the key is the same as the translation,
    * we don't render anything.
    */
    const key = this.props.translateKey
    if (key.indexOf('html-') === -1) {
      throw new Error('HTML translate key needs `html-` string')
    }
    const translated = t(key)
    if (key === translated) return null
    return (
      <span dangerouslySetInnerHTML={{ __html: translated }}>
      </span>
    )
  }
  static PropTypes =
  { translateKey: React.PropTypes.string.isRequired
  };
}

export default TranslateHtml
