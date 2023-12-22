import PropertyIcon from "@/svg/PropertyIcon";
import RightIcon from "@/svg/RightIcon";
import { Text, Box } from "@chakra-ui/react";

const PropertyOverview = () => {
  return (
    <>
      <section>
        <Box
          w='407px'
          h='157px'
          boxShadow='xl'
          p='6'
          rounded='lg'
          bg='white'
          gap={5}
        >
          <Box display='flex' justifyContent='space-between' mb='15px'>
            <Box display='flex' gap={2} color='#191919'>
              <PropertyIcon />
              Property Overview
            </Box>
            <Box display='flex'>
              <Text fontSize={12} color='#CBCBCB'>
                view all
              </Text>
              <RightIcon />
            </Box>
          </Box>
          <Box display='flex' gap={5}>
            <Box
              w='117px'
              h='79px'
              boxShadow='md'
              p='6'
              rounded='md'
              bg='white'
              fontSize={24}
              justifyContent='center'
              alignItems='center'
              display='flex'
              flexDirection='column'
              border='1px solid #F5F5F5'
            >
              <Text fontWeight={600} color='#191919'>
                0
              </Text>
              <Text fontSize={14} color='#3D3D3D'>
                Total
              </Text>
            </Box>
            <Box
              w='117px'
              h='79px'
              boxShadow='md'
              p='6'
              rounded='md'
              bg='white'
              fontSize={24}
              justifyContent='center'
              alignItems='center'
              display='flex'
              flexDirection='column'
              border='1px solid #F5F5F5'
            >
              {" "}
              <Text fontWeight={600} color='#191919'>
                0
              </Text>
              <Text fontSize={14} color='#3D3D3D'>
                Available
              </Text>
            </Box>
            <Box
              w='117px'
              h='79px'
              boxShadow='md'
              p='6'
              rounded='md'
              bg='white'
              fontSize={24}
              justifyContent='center'
              alignItems='center'
              display='flex'
              flexDirection='column'
              border='1px solid #F5F5F5'
            >
              <Text fontWeight={600} color='#191919'>
                0
              </Text>
              <Text fontSize={14} color='#3D3D3D' textAlign='center'>
                Sold Out
              </Text>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};
export default PropertyOverview;
