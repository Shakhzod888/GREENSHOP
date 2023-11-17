import { Box, Button, Flex, Text } from "@mantine/core";
import React from "react";
import Slider from "@mui/material/Slider";
import Flower1 from "../assets/flower1.png";
import Flower2 from "../assets/flower2.png";
import Url from "../productsFlow.json";

function Products() {
  const [range, setRange] = React.useState([5, 30]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }

  return (
    <Box w={"100%"} h={"auto"}>
      <Flex justify={"space-between"}>
        <Box w={"310px"} h={"auto"} bg={"#FBFBFB"}>
          <Box pt={14}>
            <Text pl={30} c={"#3D3D3D"} fz={18} fw={700}>
              Categories
            </Text>
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              pt={20}
            >
              <Flex
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#46A358"} fz={17} fw={700}>
                  House Plants
                </Text>
                <Text c={"#46A358"} fz={17} fw={700}>
                  (33)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Potter Plants
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (12)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Seeds
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (65)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Small Plants
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (39)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Big Plants
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (23)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Succulents
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (17)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Trerrariums
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (19)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Gardening
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (13)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Accessories
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (18)
                </Text>
              </Flex>
            </Flex>
            <Box pt={55}>
              <Text pl={30} c={"#3D3D3D"} fz={18} fw={700}>
                Price Range
              </Text>
              <Flex
                direction={"column"}
                style={{
                  width: "16rem",
                  paddingTop: "10px",
                  paddingLeft: "50px",
                }}
              >
                <Slider
                  value={range}
                  onChange={handleChanges}
                  valueLabelDisplay="auto"
                />
                <Flex pt={5} align={"center"}>
                  <Text c={"#3D3D3D"} fz={19} fw={400}>
                    Price:
                  </Text>
                  <Text c={"#46A358"} fz={19} fw={700} pl={5}>
                    ${range[0]} - ${range[1]}
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Button
              mt={16}
              ml={30}
              w={90}
              h={35}
              variant="filled"
              color="#46A358"
            >
              Filter
            </Button>
            <Box mt={55}>
              <Text pl={30} c={"#3D3D3D"} fz={18} fw={700}>
                Size
              </Text>
              <Flex
                direction={"column"}
                justify={"center"}
                align={"center"}
                pt={20}
              >
                <Flex
                  ta={"center"}
                  align={"center"}
                  justify={"space-between"}
                  w={220}
                >
                  <Text c={"#3D3D3D"} fz={17} fw={400}>
                    Small
                  </Text>
                  <Text c={"#3D3D3D"} fz={17} fw={400}>
                    (98)
                  </Text>
                </Flex>
                <Flex
                  pt={25}
                  ta={"center"}
                  align={"center"}
                  justify={"space-between"}
                  w={220}
                >
                  <Text c={"#3D3D3D"} fz={17} fw={400}>
                    Medium
                  </Text>
                  <Text c={"#3D3D3D"} fz={17} fw={400}>
                    (86)
                  </Text>
                </Flex>
                <Flex
                  pt={25}
                  ta={"center"}
                  align={"center"}
                  justify={"space-between"}
                  w={220}
                >
                  <Text c={"#3D3D3D"} fz={17} fw={400}>
                    Large
                  </Text>
                  <Text c={"#3D3D3D"} fz={17} fw={400}>
                    (78)
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box className="dashboardBottom"></Box>
          </Box>
        </Box>
        <Box w={"70%"} h={"100vh"}>
          <Flex gap={50} justify={"space-between"}>
            <Flex gap={40}>
              <Text
                className=""
                c={"#46A358"}
                fz={17}
                fw={700}
                style={{ textDecoration: "underline" }}
              >
                All Plants
              </Text>
              <Text className="" c={"#3D3D3D"} fz={17} fw={400}>
                New Arrivals
              </Text>
              <Text className="" c={"#3D3D3D"} fz={17} fw={400}>
                Sale
              </Text>
            </Flex>
            <Flex gap={10}>
              <Text fz={17} c={"#3D3D3D"} fw={400}>
                Short by: Default sorting
              </Text>
              <Text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M10.6666 1.66667L5.99998 6.33333L1.33331 1.66667"
                    stroke="#3D3D3D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Text>
            </Flex>
          </Flex>
          <Flex mt={20} justify={"space-between"} gap={60} wrap={"wrap"}>
            {Url.map((url, index) => (
              <Box
                key={index}
                pos={"relative"}
                className="productBox"
                w={250}
                h={310}
                bg={"#FBFBFB"}
              >
                <img src={Flower1} alt="" />
                <Flex
                  justify={"space-around"}
                  gap={40}
                  align={"center"}
                  pl={50}
                  bottom={60}
                  pos={"absolute"}
                  className="productHover"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      {/* Your SVG path goes here */}
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      {/* Your SVG path goes here */}
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      {/* Your SVG path goes here */}
                    </svg>
                  </div>
                </Flex>
                <Text pt={5} c={"#3D3D3D"} fz={17} fw={400}>
                  {url.name}
                </Text>
                <Text c={"#46A358"} fz={18} fw={700}>
                  {url.price}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Products;
