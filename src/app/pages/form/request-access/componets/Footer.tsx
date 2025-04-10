import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { footerLinks2, socialMediaLinks } from '@/assets/data/footer-items'
import logoLight from '@/assets/images/logo.svg'
import { developedBy, developedByLink } from '@/context/constants'

const Footer = () => {
  return (
    <footer>
      <Container className="position-relative">
        <Row>
          <Col lg={6} className="mx-auto text-center my-5">
            <Link to="/">
              <img className="h-40px" src={logoLight} alt="logo" />
            </Link>
            <p className="mt-3 ">
              Eduport education theme, built specifically for the education centers which is dedicated to teaching and involving learners.
            </p>
            <ul className="nav justify-content-center justify-content-center text-primary-hover mt-3 mt-md-0">
              {footerLinks2[1].items.slice(2).map((item, i) => (
                <p key={i} className="tw:text-white tw:text-xs tw:md:text-sm">
                  {item.name}
                </p>
              ))}
            </ul>
            <ul className="list-inline mb-0 mt-3">
              {socialMediaLinks.map((link) => (
                <img key={link.icon} className="tw:size-6" src={link.icon} />
              ))}
            </ul>
            <div className=" text-primary-hover mt-3">
              Copyrights ©2024 Eduport. Build by
              <Link to={developedByLink} target="_blank" className="text-reset">
                {developedBy}
              </Link>
              .
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
