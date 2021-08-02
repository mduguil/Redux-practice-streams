import React from 'react'
import { connect } from 'react-redux'
import Modal from '../Modal'
import history from '../../history'
import { fetchStream } from '../../actions'

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  renderActions() {
    return (
      <>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </>
    )
  }

  renderContent() {
    return (
      <>
        {this.props.stream
          ? `Are you sure you want to delete the stream with title: ${this.props.stream.title}?`
          : 'Are you sure you want to delete this stream?'
        }
      </>
    )
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream : state.streams[ownProps.match.params.id]}
}

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamDelete)
