import React, {Component} from 'react';

class InstagramFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      desc: '',
      img: '',
      url: ''
    };
  }

  componentDidMount() {

    console.log('fetch')
    fetch('https://www.instagram.com/la_laborantine_/?__a=1')
      .then(response => {
        response.json().then((data) => {
          const lastPost = data.graphql.user.edge_owner_to_timeline_media.edges[0].node
          let text = lastPost.edge_media_to_caption.edges[0] ? lastPost.edge_media_to_caption.edges[0].node.text : ''
          if (text.length > 250) text = text.slice(0, 250) + ' [...]'
          if (text.indexOf('.\n.\n.') != -1) text = text.split('.\n.\n.')[0]
          this.setState({desc: text})
          this.setState({url: ('https://www.instagram.com/p/' + lastPost.shortcode + '/')})
          this.setState({img: lastPost.display_url})
        })
      })
  }


  render() {
    return (
      <a href={this.state.url}>
        <img src={this.state.img} alt=""/>
        <p>
          <cite>{this.state.desc}</cite>
        </p>
      </a>
    )
  }
}

export default InstagramFeed;
