import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../public/assets/Images/logo.png";
import fb from "../../public/assets/Images/fb.png";
import x from "../../public/assets/Images/x.png";
import linkedin from "../../public/assets/Images/linkedin.png";
import insta from "../../public/assets/Images/insta.png";


import { Typography } from '@mui/material';
import Primary_Button from './Ui/Primary_Button';



class Footer extends Component {
    render() {
        const current_year = new Date().getFullYear();
        return (
            <div className="footer-block" >
                <div>
                    <div className='footer-logo-container'>
                        <Image src={logo} width={28} height={28} alt="logo" />
                        <Typography variant="h7" color={"secondary"}>{"PG Rental"}</Typography>
                    </div>
                    <Typography variant="subtitle2" color={"secondary"}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}</Typography>
                    <div className='footer-social'>
                        <Image src={fb} width={32} height={32} style={{ marginRight: 5 }} alt="fb" />
                        <Image src={x} width={32} height={32} style={{ marginRight: 5 }} alt="x" />
                        <Image src={linkedin} width={32} height={32} style={{ marginRight: 5 }} alt="linkedin" />
                        <Image src={insta} width={32} height={32} style={{ marginRight: 5 }} alt="insta" />
                    </div>
                </div>
                <div>
                    <div >
                        <Typography variant="h6" color={"secondary"}>{"COMPANY"}</Typography>
                    </div>
                    <Typography variant="subtitle2" color={"primary"}>{"About us"}</Typography>
                    <Typography variant="subtitle2" color={"secondary"}>{"Career"}</Typography>
                    <Typography variant="subtitle2" color={"secondary"}>{"Blog"}</Typography>
                    <Typography variant="subtitle2" color={"secondary"}>{"Rental Guides"}</Typography>
                    <Typography variant="subtitle2" color={"secondary"}>{"Privacy Policy"}</Typography>
                    <Typography variant="subtitle2" color={"secondary"}>{"Terms & Conditions"}</Typography>
                </div>
                <div>
                    <Typography variant="h6" color={"secondary"}>{"Post your property for free"}</Typography>
                    <Typography variant="subtitle2" color={"primary"}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}</Typography>
                    <Primary_Button color={"secondary"} label={"Post Now "} />
                </div>

            </div>
        );
    }
}

export default Footer;