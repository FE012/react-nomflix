import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faMinus,
  faArrowTrendDown,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  > div:nth-child(odd) {
    margin-right: 15px;
  }
`;

const CoinBox = styled.div`
  width: 50%;
  height: 100px;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 15px;
  h3 {
    font-weight: 500;
  }
  div {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
  }
  div h2 {
    font-size: 35px;
    font-weight: 400;
  }
`;

interface ChartProps {
  coinId: string;
}

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IPriceData>(["coinPrice", coinId], () =>
    fetchCoinTickers(coinId)
  );
  console.log(data);

  return (
    <>
      {isLoading ? (
        "Loading price"
      ) : (
        <Container>
          {/* <Wrapper>
        <CoinBox>
          <h2> {data?.quotes.USD.ath_date}</h2>
        </CoinBox>
        <CoinBox></CoinBox>
      </Wrapper> */}
          <Wrapper>
            <CoinBox>
              <h3>From 1h ago</h3>
              <div>
                {data?.quotes.USD.percent_change_1h !== undefined ? (
                  data?.quotes.USD.percent_change_1h > 0 ? (
                    <h2 style={{ color: "#FC2947" }}>
                      {data?.quotes.USD.percent_change_1h}%
                    </h2>
                  ) : data.quotes.USD.percent_change_1h === 0 ? (
                    <h2 style={{ color: "black" }}>
                      {data?.quotes.USD.percent_change_1h}%
                    </h2>
                  ) : (
                    <h2 style={{ color: "#4780ED" }}>
                      {data?.quotes.USD.percent_change_1h}%{" "}
                    </h2>
                  )
                ) : (
                  ""
                )}

                {data?.quotes.USD.percent_change_1h !== undefined ? (
                  data?.quotes.USD.percent_change_1h > 0 ? (
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      size="2x"
                      style={{ color: "#FC2947" }}
                    />
                  ) : data.quotes.USD.percent_change_1h === 0 ? (
                    <FontAwesomeIcon
                      icon={faMinus}
                      size="2x"
                      style={{ color: "black" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faArrowTrendDown}
                      size="2x"
                      style={{ color: "#4780ED" }}
                    />
                  )
                ) : (
                  ""
                )}
              </div>
            </CoinBox>
            <CoinBox>
              <h3>From 6h ago</h3>
              <div>
                {data?.quotes.USD.percent_change_6h !== undefined ? (
                  data?.quotes.USD.percent_change_6h > 0 ? (
                    <h2 style={{ color: "#FC2947" }}>
                      {data?.quotes.USD.percent_change_6h}%
                    </h2>
                  ) : data.quotes.USD.percent_change_6h === 0 ? (
                    <h2 style={{ color: "black" }}>
                      {data?.quotes.USD.percent_change_6h}%
                    </h2>
                  ) : (
                    <h2 style={{ color: "#4780ED" }}>
                      {data?.quotes.USD.percent_change_6h}%
                    </h2>
                  )
                ) : (
                  ""
                )}

                {data?.quotes.USD.percent_change_6h !== undefined ? (
                  data?.quotes.USD.percent_change_6h > 0 ? (
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      size="2x"
                      style={{ color: "#FC2947" }}
                    />
                  ) : data.quotes.USD.percent_change_6h === 0 ? (
                    <FontAwesomeIcon
                      icon={faMinus}
                      size="2x"
                      style={{ color: "black" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faArrowTrendDown}
                      size="2x"
                      style={{ color: "#4780ED" }}
                    />
                  )
                ) : (
                  ""
                )}
              </div>
            </CoinBox>
          </Wrapper>
          <Wrapper>
            <CoinBox>
              <h3>From 12h ago</h3>
              <div>
                {data?.quotes.USD.percent_change_12h !== undefined ? (
                  data?.quotes.USD.percent_change_12h > 0 ? (
                    <h2 style={{ color: "#FC2947" }}>
                      {data?.quotes.USD.percent_change_12h}%
                    </h2>
                  ) : data.quotes.USD.percent_change_12h === 0 ? (
                    <h2 style={{ color: "black" }}>
                      {data?.quotes.USD.percent_change_12h}%
                    </h2>
                  ) : (
                    <h2 style={{ color: "#4780ED" }}>
                      {data?.quotes.USD.percent_change_12h}%{" "}
                    </h2>
                  )
                ) : (
                  ""
                )}

                {data?.quotes.USD.percent_change_12h !== undefined ? (
                  data?.quotes.USD.percent_change_12h > 0 ? (
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      size="2x"
                      style={{ color: "#FC2947" }}
                    />
                  ) : data.quotes.USD.percent_change_12h === 0 ? (
                    <FontAwesomeIcon
                      icon={faMinus}
                      size="2x"
                      style={{ color: "black" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faArrowTrendDown}
                      size="2x"
                      style={{ color: "#4780ED" }}
                    />
                  )
                ) : (
                  ""
                )}
              </div>
            </CoinBox>
            <CoinBox>
              <h3>From 24h ago</h3>
              <div>
                {data?.quotes.USD.percent_change_24h !== undefined ? (
                  data?.quotes.USD.percent_change_24h > 0 ? (
                    <h2 style={{ color: "#FC2947" }}>
                      {data?.quotes.USD.percent_change_24h}%
                    </h2>
                  ) : data.quotes.USD.percent_change_24h === 0 ? (
                    <h2 style={{ color: "black" }}>
                      {data?.quotes.USD.percent_change_24h}%
                    </h2>
                  ) : (
                    <h2 style={{ color: "#4780ED" }}>
                      {data?.quotes.USD.percent_change_24h}%{" "}
                    </h2>
                  )
                ) : (
                  ""
                )}

                {data?.quotes.USD.percent_change_24h !== undefined ? (
                  data?.quotes.USD.percent_change_24h > 0 ? (
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      size="2x"
                      style={{ color: "#FC2947" }}
                    />
                  ) : data.quotes.USD.percent_change_24h === 0 ? (
                    <FontAwesomeIcon
                      icon={faMinus}
                      size="2x"
                      style={{ color: "black" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faArrowTrendDown}
                      size="2x"
                      style={{ color: "#4780ED" }}
                    />
                  )
                ) : (
                  ""
                )}
              </div>
            </CoinBox>
          </Wrapper>
          <Wrapper>
            <CoinBox>
              <h3>From 7d ago</h3>
              <div>
                {data?.quotes.USD.percent_change_7d !== undefined ? (
                  data?.quotes.USD.percent_change_7d > 0 ? (
                    <h2 style={{ color: "#FC2947" }}>
                      {data?.quotes.USD.percent_change_7d}%
                    </h2>
                  ) : data.quotes.USD.percent_change_7d === 0 ? (
                    <h2 style={{ color: "black" }}>
                      {data?.quotes.USD.percent_change_7d}%
                    </h2>
                  ) : (
                    <h2 style={{ color: "#4780ED" }}>
                      {data?.quotes.USD.percent_change_7d}%{" "}
                    </h2>
                  )
                ) : (
                  ""
                )}

                {data?.quotes.USD.percent_change_7d !== undefined ? (
                  data?.quotes.USD.percent_change_7d > 0 ? (
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      size="2x"
                      style={{ color: "#FC2947" }}
                    />
                  ) : data.quotes.USD.percent_change_7d === 0 ? (
                    <FontAwesomeIcon
                      icon={faMinus}
                      size="2x"
                      style={{ color: "black" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faArrowTrendDown}
                      size="2x"
                      style={{ color: "#4780ED" }}
                    />
                  )
                ) : (
                  ""
                )}
              </div>
            </CoinBox>
            <CoinBox>
              <h3>From 30d ago</h3>
              <div>
                {data?.quotes.USD.percent_change_30d !== undefined ? (
                  data?.quotes.USD.percent_change_30d > 0 ? (
                    <h2 style={{ color: "#FC2947" }}>
                      {data?.quotes.USD.percent_change_30d}%
                    </h2>
                  ) : data.quotes.USD.percent_change_30d === 0 ? (
                    <h2 style={{ color: "black" }}>
                      {data?.quotes.USD.percent_change_30d}%
                    </h2>
                  ) : (
                    <h2 style={{ color: "#4780ED" }}>
                      {data?.quotes.USD.percent_change_30d}%
                    </h2>
                  )
                ) : (
                  ""
                )}

                {data?.quotes.USD.percent_change_30d !== undefined ? (
                  data?.quotes.USD.percent_change_30d > 0 ? (
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      size="2x"
                      style={{ color: "#FC2947" }}
                    />
                  ) : data.quotes.USD.percent_change_30d === 0 ? (
                    <FontAwesomeIcon
                      icon={faMinus}
                      size="2x"
                      style={{ color: "black" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faArrowTrendDown}
                      size="2x"
                      style={{ color: "#4780ED" }}
                    />
                  )
                ) : (
                  ""
                )}
              </div>
            </CoinBox>
          </Wrapper>
        </Container>
      )}
    </>
  );
}

export default Price;
