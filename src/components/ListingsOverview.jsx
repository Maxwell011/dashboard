import BookmarkIcon from "@/svg/BookmarkIcon";
import ImageIcon from "@/svg/ImageIcon";
import { Text, Box } from "@chakra-ui/react";

const ListingsOverview = () => {
  return (
    <>
      <section>
        <Box w="475px" h="287px">
          <Text fontSize={18} color="#191919" fontWeight={600}>
            Listing Overview
          </Text>

          <Box>
            <Box display="flex" justifyContent="" flexDirection="row">
              <Text fontSize={10}>Most Viewed</Text>
              <Text fontSize={10}>Most shared</Text>
            </Box>
          </Box>

          <Box display="flex" justifyContent="">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                w="67px"
                h="68px"
                backgroundColor="#F5F5F5"
                justifyContent="center"
                alignItems="center"
                display="flex"
                borderRadius="12"
                border="1px"
                borderColor="#12D8A0"
              >
                <ImageIcon width={36} height={36} />
              </Box>
              <Text color="#191919" fontSize={16} fontWeight={600}>
                None
              </Text>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                w="67px"
                h="68px"
                backgroundColor="#F5F5F5"
                justifyContent="center"
                alignItems="center"
                display="flex"
                borderRadius="12"
                border="1px"
                borderColor="#4545FE"
              >
                <ImageIcon width={36} height={36} />
              </Box>
              <Text color="#191919" fontSize={16} fontWeight={600}>
                None
              </Text>
            </Box>
          </Box>

          <Box w="437px" h="109px" borderRadius="12" backgroundColor="#F5F5F5">
            <Box>
              <h3>Most watchlisted</h3>
              <Box display="flex" alignItems="flex-start" p="8" gap={25}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Box
                    w="67px"
                    h="68px"
                    backgroundColor="#F5F5F5"
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    borderRadius={12}
                    border="1px"
                    borderColor="#4545FE"
                  >
                    <ImageIcon width={36} height={36} />
                  </Box>{" "}
                  <Text color="#191919" fontSize={16} fontWeight={600}>
                    None
                  </Text>
                </Box>
                <Box w="437px" h="109px" justifyContent="space-between">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    p="2"
                    borderColor="#E4E4E4"
                    border="1px"
                    borderRadius={12}
                    w="189px"
                    h="68px"
                  >
                    <Box display="flex" flexDirection="column">
                      <Text fontSize={24} color="#191919">
                        0
                      </Text>
                      <Text fontSize={10} color="#3D3D3D">
                        Number of watchlists
                      </Text>
                    </Box>
                    <BookmarkIcon />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};
export default ListingsOverview;
