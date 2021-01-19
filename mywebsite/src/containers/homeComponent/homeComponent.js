import React, { Component } from 'react';
import theme from '../../theme';
import './home.css';
import styled from 'styled-components';

const Namesmall = styled.h3`
  font-family: ${ theme.titleFont };
  color: ${ theme.white };
  font-weight: 600;
  line-height: 1em;
`
const Desigsmall = styled(Namesmall)`
  color: ${ theme.primaryAccent };
`

const Hello = styled.p`
  font-family: ${ theme.paraFont };
  color: ${ theme.highlight };
`
const Name = styled.h1`
  font-family: ${ theme.titleFont };
  color: ${ theme.white };
  font-weight: 600;
  line-height: 1em;
`
const Desig = styled(Name)`
  color: ${ theme.primaryAccent };
`
const Desc = styled(Hello)`
  color: ${ theme.primaryAccent };
  max-width: 450px;
  line-height: 1.5rem;
`

class Home extends Component {
  render() {
    return(
      <div class = "container">
        <div class = "row home-banner-row align-items-center">
          <div class = "col-12 text-left text-md-center">
            <Hello>Hi, my name is</Hello>
            <br/>
            <Name className="d-none d-md-block">Madhav Gupta.</Name>
            <Namesmall className = "d-block d-md-none">Madhav Gupta.</Namesmall>
            <Desig className = "d-none d-md-block">I write visible code.</Desig>
            <Desigsmall className = "d-block d-md-none">I write visible code.</Desigsmall>
            <br/>
            <Desc className="mx-md-auto">I am a CS sophomore, pursuing B.E. from
                BITS Pilani. I am a frontend web developer and
                graphic designer.
            </Desc>
            <br/>
            <Hello>Based in Delhi, India</Hello>
          </div>
        </div>
        <div className = "row tall-row"></div>
      </div>
    );
  }
}

export default Home;