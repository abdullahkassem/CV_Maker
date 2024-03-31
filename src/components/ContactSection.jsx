import '../styles/ContactSection.css'
import Sidesub from './Sidesub.jsx'
import SideSectionTitle from './SideSectionTitle.jsx'

function ContactSection() {

    return (
        <div className="contactSect">

            <SideSectionTitle name='Contact' />
            <Sidesub head='Phone' detail='+123-456-789' />
            <Sidesub head='Email' detail='toddStew@gmail.com' />
            <Sidesub head='Address' detail='Antony, Torpoint, Cornwall, United Kingdom, PL11 3AB' />

        </div>
    )
}

export default ContactSection;