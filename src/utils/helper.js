export const calculateDistance = (lat1, lon1, lat2, lon2, unit) => {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === "K") {
      dist = dist * 1.609344;
    }
    if (unit === "N") {
      dist = dist * 0.8684;
    }
    return dist;
  }
};

export const createCredential = async () => {
  const dummyChallenge = new Uint8Array([0x01, 0x02, 0x03, 0x04]); // Dummy challenge data
  const base64encode = (arrayBuffer) =>
    btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));

  try {
    const userId = "uniqueUserId123"; // Replace with user ID logic

    const publicKeyCredential = await navigator.credentials.create({
      publicKey: {
        challenge: dummyChallenge,
        rp: {
          name: "React App",
          id: "priyanshu-pwa-demo.netlify.app",
        },
        user: {
          id: new Uint8Array([userId]),
          name: "user@example.com",
          displayName: "User Name",
        },
        pubKeyCredParams: [
          { type: "public-key", alg: -7 }, // ES256
          { type: "public-key", alg: -257 }, // RS256
          // Add other supported algorithms as needed
        ],
        authenticatorSelection: { authenticatorAttachment: "platform" },
        timeout: 60000,
        attestation: "direct",
      },
    });

    const credentialDataForStorage = {
      id: publicKeyCredential.id,
      rawId: base64encode(publicKeyCredential.rawId),
      response: {
        attestationObject: base64encode(
          publicKeyCredential.response.attestationObject
        ),
        clientDataJSON: base64encode(
          publicKeyCredential.response.clientDataJSON
        ),
      },
      type: publicKeyCredential.type,
    };

    localStorage.setItem("publicKey", JSON.stringify(credentialDataForStorage));
    console.log("Credential created:", publicKeyCredential);
    alert("Credentials created, Verify once again to book");
    return true;
    // Store publicKeyCredential in localStorage or client-side storage
  } catch (error) {
    console.error("Error creating credential:", error);
    localStorage.clear();
  }
};

export const verifyCredential = async () => {
  const dummyChallenge = new Uint8Array([0x01, 0x02, 0x03, 0x04]); // Dummy challenge data

  const base64decode = (base64String) =>
    Uint8Array.from(atob(base64String), (c) => c.charCodeAt(0));

  try {
    // Retrieve the stored credential data from localStorage
    const storedCredentialData = JSON.parse(localStorage.getItem("publicKey"));

    if (!storedCredentialData) {
      console.error("No stored credential data found");
      return;
    }

    // Convert base64-encoded data back to binary
    const rawId = base64decode(storedCredentialData.rawId);
    const attestationObject = base64decode(
      storedCredentialData.response.attestationObject
    );
    const clientDataJSON = base64decode(
      storedCredentialData.response.clientDataJSON
    );

    // Create PublicKeyCredential object for verification
    const credentialToVerify = {
      id: storedCredentialData.id,
      rawId,
      response: {
        attestationObject,
        clientDataJSON,
      },
      type: storedCredentialData.type,
    };

    // Verify the credential
    const credential = await navigator.credentials.get({
      publicKey: {
        challenge: dummyChallenge,
        allowCredentials: [
          {
            type: "public-key",
            id: credentialToVerify.rawId,
            transports: ["internal"], // Use transports as needed
          },
        ],
        timeout: 60000,
      },
    });

    console.log("Credential verified:", credential);
    alert("Credentials Verified");
    return true;
  } catch (error) {
    console.error("Error retrieving and verifying credential:", error);
  }
};
