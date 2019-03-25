import '../assets/css/footer.less'

export default {
  data() {
    return {
      author: 'Bugger-Lee'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>hello vue-todo {this.author}</span>
      </div>
    )
  }
}