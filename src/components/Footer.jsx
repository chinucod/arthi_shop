import React from "react";
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import GoogleIcon from '@mui/icons-material/Google';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container=styled.div`
    display: flex;
`;
const Left=styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Center=styled.div`
flex: 1;
`;
const Logo=styled.img`
flex: 1;
width: 20%;
`;
const Desc=styled.p`
margin: 20px 0px;
`;
const Social=styled.div`
display: flex;
`;
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;

`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const Right=styled.div`
flex: 1;
`;

const ContactItem = styled.div`
 margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
width: 50%;
`;


const Footer = () => {
    function redirect(name) {
        if (name==='facebook'){
            window.open('https://www.facebook.com/profile.php?id=100088227843187&mibextid=b06tZ0');
        }
        else if (name === 'instagram') {
            window.open('https://instagram.com/arthiweaversstudio?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D');
          } 
          else if (name === 'whatsapp') {
            window.open('https://chat.whatsapp.com/DBFOY4zrq1c0dwnANDR41r');
          } 
          else if (name === 'location') {
            window.open('https://goo.gl/maps/gTCMuDAsxVHNwJhb6');
          } 
          else if (name === 'google') {
            window.open('https://www.google.com/search?q=Sri+Varalaxmi+Silks&sca_esv=561590507&rlz=1C1ONGR_enIN1037IN1037&sxsrf=AB5stBgOJsC6T_Ikbj6bHAuLPT9EsxBhCQ%3A1693475253369&ei=tWHwZPuPFtTp4-EPh4uG4Ag&ved=0ahUKEwi7vqb3zoaBAxXU9DgGHYeFAYwQ4dUDCBA&uact=5&oq=Sri+Varalaxmi+Silks&gs_lp=Egxnd3Mtd2l6LXNlcnAiE1NyaSBWYXJhbGF4bWkgU2lsa3MyBBAjGCcyBhAAGBYYHjIGEAAYFhgeMgIQJjIIEAAYigUYhgMyCBAAGIoFGIYDMggQABiKBRiGA0iUA1AAWABwAHgBkAEAmAGGAaABhgGqAQMwLjG4AQPIAQD4AQL4AQHiAwQYACBBiAYB&sclient=gws-wiz-serp#rlimm=11960772094749555328');
          }
   }
    return (
        <Container>
            <Left>
                <Logo src="https://media.canva.com/1/image-resize/1/550_515_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8zQmt1OC9NQUZHRjEzQmt1OC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAACfBA3RKYmn2ysEP9kaqM6FF-f6Ocs9mh7BBrwv5LW_0&exp=1693482129&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAPR20drIbeJozTWpqsVa74TuVvmB8CchiObMXV9gUylY"/>
                <Desc>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</Desc>
                <Social>
                    <SocialIcon color="3B5999"  name="facebook" onClick={()=>redirect('facebook')}>
                        <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon color="E1306C"  name="instagram" onClick={()=>redirect('instagram')}>
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon color="075e54"  name="whatsapp" onClick={()=>redirect('whatsapp')}>
                        <WhatsAppIcon/>
                    </SocialIcon>
                    <SocialIcon color="E60023"  name="location" onClick={()=>redirect('location')}>
                        <PlaceIcon/>
                    </SocialIcon>
                    <SocialIcon color="4285F4"  name="google" onClick={()=>redirect('google')}>
                        <GoogleIcon/>
                    </SocialIcon>
                </Social>
            </Left>
            <Center></Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><PlaceIcon style={{marginRight:'10px'}}/> 86/100, TK Nambi St, Little Kanchipuram, Ennaikaran, Kanchipuram, Arappanacheri, Tamil Nadu 631501</ContactItem>
                <ContactItem><CallIcon style={{marginRight:'10px'}}/> +91 94436 43669</ContactItem>
                <ContactItem><MailOutlineIcon style={{marginRight:'10px'}}/> contact@email.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer;