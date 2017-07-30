import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
import A_H from 'A_H'
const cn = cssClassName('SE_HmqHero')
import Chart from './Chart'
import A_P from 'A_P'

class SE_HmqHero extends Component {
  render() {
    const {chartProps, statistics, my, loaded} = this.props
    return (
      <div>
        <A_Container type="mob-wide-line">
          <A_H type="hmq" >HMQ Explorer</A_H>
          <hr className={cn('hr')}/>
        </A_Container>
        <div className={cn('title-tablet')}>
          <A_Container type="section-hmq">
            <A_H type="section">Explore the HMQ</A_H>
            <A_P type="third">Humaniq token is the core of the banking ecosystem that Humaniq has developed. We are eager to present the transparency and the real time updates of the HMQ.</A_P>
          </A_Container>
        </div>
        <A_Container type="section-hmq">
          <div className={cn('root')}>
            <div className={cn('chart')}>
              <div className={cn('title-desctop')}>
                <A_H type="section">Explore the HMQ</A_H>
                <A_P type="third">Humaniq token is the core of the banking ecosystem that Humaniq has developed. We are eager to present the transparency and the real time updates of the HMQ.</A_P>
              </div>
              <Chart {...{chartProps}} />
            </div>
            <div className={cn('stat')}>
              <A_H type='hmq-e'>Token Supply</A_H>
              <A_P type='hmq-e'>{my._tokenSupply}</A_P>
              <A_H type='hmq-e'>Value per Token</A_H>
              <A_P type='hmq-e'>{my._tokenValue}</A_P>
              <A_H type='hmq-e'>Total Holders</A_H>
              <A_P type='hmq-e'>{statistics.totalWallets}</A_P>
              <A_H type='hmq-e'>Total Transactions</A_H>
              <A_P type='hmq-e'>{statistics.totalTransactions}</A_P>
              <A_H type='hmq-e'>Transactions 24h</A_H>
              <A_P type='hmq-e'>{statistics.totalTransactions24}</A_P>
              <A_H type='hmq-e'>Value 24h</A_H>
              <A_P type='hmq-e'>{my._volume24}</A_P>
              <A_H type='hmq-e'>Participating Exchanges</A_H>
              <A_P type='hmq-e'>{statistics.participatingExchanges}</A_P>

            </div>
          </div>
        </A_Container>
      </div>
    )
  }
}
//
SE_HmqHero.propTypes = {
  chartProps: T.object.isRequired,
};

SE_HmqHero.defaultProps = {
}

export default SE_HmqHero