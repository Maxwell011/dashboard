import GraphArrowLeft from "@/svg/GraphArrowLeft";
import GraphArrowRight from "@/svg/GraphArrowRight";
import Line from "@/svg/Line";
import Line3 from "@/svg/Line3";
import UpArrowIcon from "@/svg/UpArrowIcon";
import UpIcon2 from "@/svg/UpIcon2";
import { Text, Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const SalesOverview = () => {
  return (
    <>
      <Box w="856px" h="325px" borderRadius="16" border="2px" p="5">
        <Box display="flex" justifyContent="space-between" mb="10">
          <Box display="flex" flexDirection="column">
            <Text color="#191919" fontSize={20}>
              Sales Overview
            </Text>
            <Text color="#606060" fontSize={12}>
              Showing overview Jan 2022 - Sep 2022
            </Text>
          </Box>

          <Box
            size="md"
            height="46px"
            width="177px"
            border="2px"
            borderColor="#CBCBCB"
            borderRadius={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            View Transactions
          </Box>
        </Box>

        <Box display="flex" justifyContent="flex-end">
          <Button
            colorScheme="f5f5f5"
            variant="ghost"
            fontSize={15}
            color="#3D3D3D"
          >
            1 Week
          </Button>
          <Button
            colorScheme="teal"
            variant="ghost"
            fontSize={15}
            color="#3D3D3D"
          >
            1 Month
          </Button>
          <Button
            colorScheme="teal"
            variant="ghost"
            fontSize={15}
            color="#3D3D3D"
          >
            1 Year
          </Button>
        </Box>

        <Line />

        <Box display="flex" justifyContent="space-between">
          <Box>
            <Box display="flex" justifyContent="space-between">
              <GraphArrowLeft />
              <GraphArrowRight />
            </Box>
            <Line3 />
            <Box display="flex" gap={19}>
              <Text color="#919191" fontSize={10}>
                Jan
              </Text>
              <Text color="#919191" fontSize={10}>
                Feb
              </Text>
              <Text color="#919191" fontSize={10}>
                Mar
              </Text>
              <Text color="#919191" fontSize={10}>
                Apr
              </Text>
              <Text color="#919191" fontSize={10}>
                May
              </Text>
              <Text color="#919191" fontSize={10}>
                Jun
              </Text>
              <Text color="#919191" fontSize={10}>
                Jul
              </Text>
              <Text color="#919191" fontSize={10}>
                Aug
              </Text>
              <Text color="#919191" fontSize={10}>
                Sep
              </Text>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" gap={15}>
            <Box display="flex" gap={3}>
              <Box
                w="189px"
                h="73px"
                borderRadius="12"
                border="1px"
                borderColor="#E4E4E4"
                p="2"
              >
                <Text color="#4545FE" fontSize={20} fontWeight="600">
                  ₦ 0.00
                </Text>
                <Box display="flex" alignItems="center" gap={1}>
                  <Text color="#191919" fontSize={10} fontWeight="600">
                    Balance
                  </Text>
                  <UpArrowIcon />
                  <Text fontSize={10}>0%</Text>
                </Box>
              </Box>
              <Box
                w="189px"
                h="73px"
                borderRadius="12"
                border="1px"
                borderColor="#E4E4E4"
                p="2"
              >
                <Text color="#12D8A0" fontSize={20} fontWeight="600">
                  ₦ 0.00
                </Text>
                <Box display="flex" alignItems="center" gap={1}>
                  <Text color="#191919" fontSize={10}>
                    Withdrawal
                  </Text>
                  <UpArrowIcon />
                  <Text>0%</Text>
                </Box>
              </Box>
            </Box>

            <Box display="flex" gap={3}>
              <Box
                w="189px"
                h="73px"
                borderRadius="12"
                border="1px"
                borderColor="#E4E4E4"
                p="2"
              >
                <Heading as="h1" color="#191919" fontSize={20}>
                  ₦ 0
                  <Heading as="span" color="#CBCBCB" fontSize={20}>
                    .00
                  </Heading>{" "}
                </Heading>
                <Box display="flex" alignItems="center" gap={1}>
                  <Text color="#191919" fontSize={10}>
                    Withdrawal
                  </Text>
                  <UpArrowIcon />
                  <Text>0%</Text>
                </Box>
              </Box>
              <Box
                w="189px"
                h="73px"
                borderRadius="12"
                border="1px"
                borderColor="#E4E4E4"
                p="2"
              >
                <Text color="#FF6A6A" fontSize={20} fontWeight="600">
                  ₦ 0.00
                </Text>
                <Box display="flex" alignItems="center" gap={1}>
                  <Text color="#191919" fontSize={10}>
                    Withdrawal
                  </Text>
                  <UpIcon2 />
                  <Text fontSize={10}>0%</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SalesOverview;
