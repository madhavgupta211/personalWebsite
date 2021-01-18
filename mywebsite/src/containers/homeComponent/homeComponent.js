import React, { Component } from 'react';
import theme from '../../theme';
import './home.css';
import styled from 'styled-components';

const Hello = styled.p`
  font-family: ${ theme.paraFont };
  color: ${ theme.highlight };
`
const Name = styled.h1`
  font-family: ${ theme.titleFont };
  color: ${ theme.white };
  font-weight: 600;
  margin-bottom: 0 !important;
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
            <Name>Madhav Gupta.</Name>
            <Desig>I write visible code.</Desig>
            <br/>
            <Desc className="mx-md-auto">I am a CS sophomore, pursuing B.E. from
                BITS Pilani. I am a frontend web developer and
                graphic designer.
            </Desc>
            <br/>
            <Hello>Based in Delhi, India</Hello>
            <p className = "test">Man</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;