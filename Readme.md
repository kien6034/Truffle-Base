# Requirements

- nodejs
- .env file containing Private keys, infura_id

#### REQUIREMENTS ### 
.env file with private keys and infura id 


## Install

$ npm install truffle -g

## Init

$ truffle init

# To import openzepplin

$ npm init -y
$ npm install @openzeppelin/contracts

## Testnet

$ npm install @truffle/hdwallet-provider

## Write contract

- write .sol file
  $ truffle compile

## Create migration file

Note: the number at the beginning is the order that truffle compile your stuff

## Open develop mode

$ truffle develop

## migrate

$ migrate // if no contract exists
$ migrate --reset // to override the writen contract
