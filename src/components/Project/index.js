import './index.css'
import {Component} from 'react'

class Project extends Component {
  state = {
    projectData: [],
  }

  componentDidMount() {
    this.renderData()
  }

  renderData = async () => {
    const data = await fetch('https://breakingbadapi.com/api/characters')

    const response = await data.json()
    const {projectData} = this.state
    console.log(response)
    const updatedData = response.map(each => ({
      id: each.id,
      name: each.name,
      nicName: each.nickname,
    }))

    this.setState({projectData: updatedData})
    console.log(projectData)
  }

  render() {
    const {updatedData} = this.state
    console.log(updatedData)

    return <div>hi</div>
  }
}

export default Project
