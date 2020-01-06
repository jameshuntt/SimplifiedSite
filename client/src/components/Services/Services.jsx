import React, { Component } from 'react'
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone'
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone'
import CodeTwoToneIcon from '@material-ui/icons/CodeTwoTone'
import DnsTwoToneIcon from '@material-ui/icons/DnsTwoTone'
import DevicesOtherTwoToneIcon from '@material-ui/icons/DevicesOtherTwoTone'
import './Services.scss'

export default class Services extends Component {
    render() {
        return (
            <div className="services-main-container">
                <p className="services-heading">Services</p>
                <div>
                    <ComputerTwoToneIcon style={{fontSize: '100px'}} />
                    <p>WebDevelopment</p>
                </div>
                <div>
                    <PhoneIphoneTwoToneIcon style={{fontSize: '100px'}} />
                    <p>AppDevelopment</p>
                </div>
                <div>
                    <CodeTwoToneIcon style={{fontSize: '100px'}} />
                    <p>CustomSoftware</p>
                </div>
                <div>
                    <DnsTwoToneIcon style={{fontSize: '100px'}} />
                    <p>Hosting</p>
                </div>
                <div>
                    <DevicesOtherTwoToneIcon style={{fontSize: '100px'}} />
                    <p>PreBuiltSoftware</p>
                </div>
            </div>
        )
    }
}
