import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native'
import { withRouter } from 'react-router-dom'
class <%= pascalEntityName %>Scene extends React.Component {
  render () {
    return (
      <Button
        onPress={() => this.props.history.push('/notifications')}
        title='Go to notifications'
      />
    )
  }
}
<%= pascalEntityName %>Scene.propTypes = {
  history: PropTypes.any
}
export default withRouter(<%= pascalEntityName %>Scene)
