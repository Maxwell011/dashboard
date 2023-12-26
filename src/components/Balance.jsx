import ImageIcon from "@/svg/ImageIcon";
import { Text, Box } from "@chakra-ui/react";
import RightIcon from "@/svg/RightIcon";

const Balance = () => {
  return (
    <>
      <Box
        w="418px"
        h="287px"
        borderRadius="12"
        bg="#fff"
        display="flex"
        alignItems="flex-start"
        flexDirection="column"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          mb="15px"
          alignItems="center"
        >
          <Box display="flex" gap={2} color="#191919" fontSize={28}>
            ₦ 0.00
          </Box>
          <Box display="flex">
            <Text fontSize={12} color="#CBCBCB">
              view all
            </Text>
            <RightIcon />
          </Box>
        </Box>
        <Text color="#606060" fontSize={14}>
          Total Outstanding Balance
        </Text>
        <Box display="flex" justifyContent="center" alignItems="center" gap={8}>
          <Box
            w="161px"
            h="155px"
            backgroundColor="#F5F5F5"
            justifyContent="center"
            alignItems="center"
            display="flex"
            borderRadius="12"
          >
            <ImageIcon width={100} height={100} />
          </Box>
          <Box>
            <Text color="#191919" fontSize={20} fontWeight={600}>
              None
            </Text>
            <Text fontSize={16} color="#FF6A6A">
              ₦ 0.00
            </Text>
            <Text fontSize={12} color="#606060">
              Outstanding Balance
            </Text>
          </Box>
        </Box>{" "}
      </Box>
    </>
  );
};
export default Balance;
