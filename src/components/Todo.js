import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { View, Text } from 'react-native'

export default class Todo extends Component {
  static defaultProps = {
    title: 'Todo padrão'
  }

  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}
