let user = (mid, uemail) => {
    return {
        metaid: mid,
        emailVerified: false,
        email: uemail,
        freeNFT: 3,
        artistVerified: false,
        artistVerifiedAt: "",
        date_created: new Date().toString(),
        minted_nfts: 0,
        sold_nft: 0,
    }
}
export default user