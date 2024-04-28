import React from 'react';
import { useTranslation } from 'react-i18next';
import './Resume.css';

function Resume() {
  const { t } = useTranslation();

  return (
    <html>
      <head />
      <body>

        <title>
        <div id="foto" align="center">
                    <img src="../img/foto.jpg" alt={t('resume.photoAlt')} style={{ maxWidth: '100%' }} />
                  </div>{t('resume.title')}</title>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="css/cv.css" rel="stylesheet" />
        <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: 'html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif;}h2 { color: #ccc; }' }} />
        <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
          <div className="w3-row-padding">
            <div className="w3-third">
              <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-display-container">
                  
                  <h2 align="center" className="w3-text-teal">
                    <b>{t('resume.name')}</b>
                  </h2>
                </div>
                <hr />
                <div className="w3-container">
                  <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />{t('resume.jobTitle')}</p>
                  <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />{t('resume.email')}</p>
                  <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />{t('resume.phone')}</p>
                  <p className="w3-large"><b>{t('resume.skillsTitle')}</b></p>
                  
                  <p><b>{t('resume.linuxSkills')}</b> Virtualización, scripting</p>
                  <div className="w3-round-xlarge w3-teal" style={{ height: '5px',width: '80%'}}/>
                  <p><b>{t('resume.webSkills')}</b> Html5, CSS, PHP, XML</p>
                  <div className="w3-round-xlarge w3-teal" style={{ height: '5px',width: '75%'}}/>
                  <p><b>{t('resume.serverSkills')}</b> DNS, DHCP, Apache, etc.</p>
                  <div className="w3-round-xlarge w3-teal" style={{ height: '5px',width: '75%'}}/>
                  <p><b>{t('resume.windowsSkills')}</b> Windows 10, server, Active Directory, etc.</p>
                  <div className="w3-round-xlarge w3-teal" style={{ height: '5px',width: '70%'}}/>
                  <p><b>{t('resume.javaSkills')}</b> Swing, SQL, hilos, sockets, hibernate, etc.</p>
                  <div className="w3-round-xlarge w3-teal" style={{ height: '5px',width: '70%'}}/>
                  <p><b>{t('resume.cmsSkills')}</b> Wordpress, Moodle, Drupal</p>
                  <div className="w3-round-xlarge w3-teal" style={{ height: '5px',width: '65%'}}/>
                  <p><b>{t('resume.networkSkills')}</b> Unifi, Airmax</p>                  
                  <div className="w3-round-xlarge w3-teal" style={{ height: '5px',width: '65%'}}/>
                  <p><b>Docker</b> Git </p>
                  <div className="w3-round-xlarge w3-teal" style={{ height: '5px',width: '65%'}}/>
                  <p><b>{t('resume.databaseSkills')}</b> Oracle, MySQL, Access, PL SQL</p>
                  <div className="w3-round-xlarge w3-teal" style={{ height: '5px',width: '70%'}}/>
                  <p><b>{t('resume.iotSkills')}</b> Proyecto, HomeAssistant, Impresión 3D</p>
                  <div className="w3-round-xlarge w3-teal" style={{ height: '5px',width: '65%'}}/>
                  <p><b>{t('resume.osSkills')}</b> MacOS, iOS, iPadOS</p>
                 <div className="w3-round-xlarge w3-teal" style={{ height: '5px',width: '60%'}}/>
                  <p><b>{t('resume.languages')}</b></p>
                  <p>{t('resume.spanish')}</p>
                  <div className="w3-round-xlarge w3-teal" style={{ height: '8px',width: '100%'}}/>
                  <p>{t('resume.french')}</p>
                  <div className="w3-round-xlarge w3-teal" style={{ height: '8px',width: '75%'}}/>
                  <p>{t('resume.english')}</p>
                  <div className="w3-round-xlarge w3-teal" style={{ height: '8px',width: '45%'}}/>
                  <br />
                </div>
              </div>
              <br />
              <div className="w3-container w3-card w3-white">
                <h2 className="w3-text-grey w3-padding-16">{t('resume.additionalInfoTitle')}</h2>
                <div className="w3-container">
                  <h5 className="w3-opacity">{t('resume.linuxCert')}</h5>
                  <p> <a href="https://github.com/triforza">{t('resume.github')}</a></p>
                  <p> <a href="https://www.ongvoluntariado.org/testimonios-de-voluntarios-que-han-participado-con-ongvoluntariado/testimonio-juan/">{t('resume.volunteering')}</a></p>
                </div>
              </div>
            </div>
            <div className="w3-twothird">
              <div className="w3-container w3-card w3-white">
                <h2 className="w3-text-grey w3-padding-16">{t('resume.educationTitle')}</h2>
                <div className="w3-container">
                  <h1 className="w3-opacity">{t('resume.dataScienceDegree')}</h1>
                  <h7 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2023 -{' '}<span className="w3-tag w3-teal w3-round"><div className="es">Ahora (2026)</div></span></h7>
                  <p>{t('resume.uocLocation')}</p>
                  
                  <h1 className="w3-opacity">{t('resume.dataAnalystDiploma')}</h1>
                  <h7 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2022 -2023</h7>
                  <p>{t('resume.openclassroomsLocation')}</p>
                  
                  <h1 className="w3-opacity">{t('resume.asirDegree')}</h1>
                  <h7 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2019 -2021</h7>
                  <p>{t('resume.asirLocation')}</p>
                  
                  <h1 className="w3-opacity">{t('resume.daiDegree')}</h1>
                  <h7 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2010 -2012</h7>
                  <p>{t('resume.daiLocation')}</p>
                </div>
              </div>
              <br />
              <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16">{t('resume.workExperienceTitle')}</h2>
                <div className="w3-container">
                  <h5 className="w3-opacity"><a href="https://www.airbnb.es/users/show/45584182" >{t('resume.hostingExperience')}</a></h5>
                  <h5 className="w3-opacity">{t('resume.freelanceIT')}</h5>
                  <h5 className="w3-opacity">{t('resume.militaryService')}</h5>
                </div>
              </div>
              <br />
              <div className="w3-container w3-card w3-white">
                <h2 className="w3-text-grey w3-padding-16">{t('resume.softSkillsTitle')}</h2>
                <div className="w3-container">
                  <p>{t('resume.communicationSkills')}</p>
                  <p>{t('resume.planningSkills')}</p>
                  <p>{t('resume.problemSolvingSkills')}</p>
                </div>
              </div>
              <br />
              <div className="w3-container">
                <p>{t('resume.socialMediaPrompt')}</p>
                <div size="30">
                  <a href="https://www.facebook.com/juanluisacebal"><i className="fa fa-facebook-official w3-hover-opacity"></i></a>
                  <a href="https://www.instagram.com/juanluacbal/"><i className="fa fa-instagram w3-hover-opacity"></i></a>
                  <a href="https://twitter.com/juanlu1985"><i className="fa fa-twitter w3-hover-opacity"></i></a>
                  <a href="https://www.linkedin.com/in/juanluisacebal"><i className="fa fa-linkedin w3-hover-opacity"></i></a>
                </div>
                <br />
              </div>
            </div>
            <br />
          </div>
        </div>
      </body>
    </html>
  );
}

export default Resume;
