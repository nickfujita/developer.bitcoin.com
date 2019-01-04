// @flow

import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout'
import HelmetPlus from 'components/HelmetPlus'
import Hero from 'components/Hero'
import Container from 'components/Container'

import StyledLink, { SmartLink } from 'atoms/StyledLink'
import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H1 from 'atoms/H1'
import Button from 'atoms/Button'
import Code from 'atoms/Code'

import media from 'styles/media'
import spacing from 'styles/spacing'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const InstallCTA = styled.div`
  margin-top: ${spacing.medium};
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: max-content;
  grid-gap: ${spacing.small};
`

const PreviewLayout = styled.div`
  display: grid;
  padding-top: ${spacing.large};
  grid-gap: ${spacing.medium};
  grid-template-columns: 1fr;
  ${media.medium`
    grid-template-columns: repeat(auto-fit, minmax(400px, .5fr));
  `};
`

const ItemLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
  grid-auto-rows: min-content;
  grid-column: span 2;
  ${media.medium`
    grid-column: 'span 2';
  `};
`

type ItemProps = {
  children: React.Node,
  to?: string,
}

const PreviewItem = ({ children, to }: ItemProps) => (
  <ItemLayout>
    {children}
    {to && (
      <StyledLink to={to}>
        <Button round>More</Button>
      </StyledLink>
    )}
  </ItemLayout>
)

type Props = {
  location: Object,
  data: { heroImage: any },
}

const BadgerPage = ({ location, data }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`Badger - developer.bitcoin.com`}
      description={
        'Badger documentation, your gateway to the world of Bitcoin Cash (BCH) applications'
      }
      keywords={
        'bagder, bitbox, developer tools, bitcoin, bitcoin cash, BCH, wormhole, sdk, api'
      }
      location={location}
    />
    <Hero image={data.heroImage}>
      <HeroLayout>
        <H3 primary>New Money.</H3>
        <H1 background>Badger SDK</H1>
        <H3 background>Your gateway to the world of Bitcoin Cash (BCH) apps</H3>
        <InstallCTA>
          <SmartLink to="https://badger.bitcoin.com">Install Badger</SmartLink>
          <StyledLink to="/badger/docs/getting-started">
            <Button round>Start Here</Button>
          </StyledLink>
        </InstallCTA>
      </HeroLayout>
    </Hero>
    <Container>
      <PreviewLayout>
        <PreviewItem>
          <H3>Powerful - TODO</H3>
          <Text>
            BITBOX is a fully featured javascript framework which offers
            Mnemonics, HDNodes, ECPairs, Crypto, Addresses, Transactions and
            much more. It’s powerful and intuitive APIs will have you creating
            world class applications.
          </Text>
          <Text>
            Expressive and intuitive, BITBOX is built with the latest javascript
            technologies so developers feel right at home. Create amazing and
            powerful Bitcoin Cash applications on the client or server with full
            mainnet and testnet support.
          </Text>
        </PreviewItem>
      </PreviewLayout>
    </Container>
  </DefaultLayout>
)

export default BadgerPage

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero.jpeg" }) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#f9b016", shadow: "#191919" }
          maxWidth: 2000
          quality: 85
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
