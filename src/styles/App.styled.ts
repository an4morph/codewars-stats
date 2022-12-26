import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  h1 {
    margin-bottom: 26px;
    margin-top: 60px;
    font-size: 30px;

    @media (min-width: 768px) {
      font-size: 40px;
      margin-bottom: 40px;
    }
  }

  .d-xs-none, .d-sm-none, .d-md-none, .d-lg-none, .d-xl-none {
    display: block;
  }

  .d-xs-none {
    display: none!important;
  }

  @media (min-width: 576px) {
    max-width: 540px;
    .d-sm-none {
      display: none!important;
    }
    .d-sm-block {
      display: block!important;
    }
  }
  @media (min-width: 768px) {
    max-width: 720px;
    .d-md-none {
      display: none!important;
    }
    .d-md-block {
      display: block!important;
    }
  }
  @media (min-width: 992px) {
    max-width: 960px;
    .d-lg-none {
      display: none!important;
    }
    .d-lg-block {
      display: block!important;
    }
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    .d-xl-none {
      display: none!important;
    }
    .d-xl-block {
      display: block!important;
    }
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
    .d-xxl-none {
      display: none!important;
    }
    .d-xxl-block {
      display: block!important;
    }
  }
`