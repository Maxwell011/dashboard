import Line from "@/svg/Line";
import UpArrowIcon from "@/svg/UpArrowIcon";
import UpIcon2 from "@/svg/UpIcon2";
import { Text, Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const SalesOverview = () => {
  return (
    <>
      <Box w="856px" h="325px" borderRadius="16" border="2px">
        <Box display="flex">
          <Box display="flex" flexDirection="column">
            <Text color="#191919" fontSize={20}>
              Sales Overview
            </Text>
            {/* <Text color='#606060' fontSize={12}>
              Showing overview Jan 2022 - Sep 2022
            </Text> */}
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
            Button
          </Box>
        </Box>

        <Box display="flex">
          <Text fontSize={20}>1 Week</Text>
          <Text fontSize={20}>1 Month</Text>
          <Text fontSize={20}>1 Year</Text>
        </Box>

        <Line />

        <Box display="flex" gap={3}>
          <Box
            w="189px"
            h="73px"
            borderRadius="12"
            border="1px"
            borderColor="#E4E4E4"
          >
            <Text color="#4545FE" fontSize={20} fontWeight="600">
              ₦ 0.00
            </Text>
            <Box display="flex" alignItems="center">
              <Text color="#191919" fontSize={14}>
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
          >
            <Text color="#12D8A0" fontSize={20} fontWeight="600">
              ₦ 0.00
            </Text>
            <Box display="flex" alignItems="center">
              <Text color="#191919" fontSize={14}>
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
          >
            <Text color="#4545FE" fontSize={20} fontWeight="600">
              ₦ 0.00
            </Text>
            <Box display="flex" alignItems="center">
              <Text color="#191919" fontSize={14}>
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
          >
            <Text color="#FF6A6A" fontSize={20} fontWeight="600">
              ₦ 0.00
            </Text>
            <Box display="flex" alignItems="center">
              <Text color="#191919" fontSize={14}>
                Withdrawal
              </Text>
              <UpIcon2 />
              <Text>0%</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SalesOverview;
