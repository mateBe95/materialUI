import React, {Component} from 'react'
import GenericCard from '../components/GenericCard';
import { CardTitle } from 'material-ui/Card'

class Logos extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col l5 offset-l4 m8 offset-m2 s12 flow-text">
            <GenericCard
              headerTitle='URL Avatar'
              headerSubtitle='Subtitle'
              headerAvatar='https://placeimg.com/128/128/arch'
              overlay={
                <CardTitle title="Overlay title"
                subtitle="Congratulation"/>
              }
              mediaImgSrc='https://placeimg.com/400/400/arch'
              mediaImgAlt='obrazek'
              cardTitle='Card title'
              cardSubtitle='Card subtitle'
              >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam iusto, quis
              dignissimos fugiat qui architecto. Numquam illum dolor officia qui sit possimus
              sint quisquam provident, a laudantium reiciendis asperiores perferendis!

            </GenericCard>

          </div>

        </div>
      </div>
    )
  }
}
    
export default Logos