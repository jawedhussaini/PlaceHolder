import { Modal, Loader, Center, Text } from "@mantine/core";
import { useState } from "react";

interface ModalForImageProps {
  opened: boolean;
  image: string;
  onClose: () => void;
}

function ModalForImage({ opened, image, onClose }: ModalForImageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleImageLoad = () => {
    setLoading(false);
    setError(false); 
  };

  const handleImageError = () => {
    setLoading(false);
    setError(true); 
  };

  return (
    <Modal opened={opened} size="auto" onClose={onClose} p="md" title="Image Preview">
      <div style={{ height: 450, width: 450, position: "relative" }}>
        {loading && !error && (
          <Center style={{ height: "100%", width: "100%", position: "absolute" }}>
            <Loader size="lg" />
          </Center>
        )}

        {!error ? (
          <img
            height={450}
            width={450}
            src={image}
            alt="Full Image"
            style={{ display: loading ? "none" : "block", objectFit: "contain" }}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : (
          <Center w={"100%"} h={"100%"}>
            <Text size="lg" c="red">
              Unable to load the image. <br />
              Please try again later.
            </Text>
          </Center>
        )}
      </div>
    </Modal>
  );
}

export default ModalForImage;
