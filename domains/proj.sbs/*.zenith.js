// change the file to [sub].js
export default {
    owner: {
        // your github username
        user: "eli32-vlc",
        // your github email
        email: "lyu63651@gmail.com",
    },
    records: [
        // can include multiple records, if some of them conflict, may be overwritten
        {
            // type of DNS record
            type: "NS",
            record: ["ns53.cloudns.net", "ns54.cloudns.net"], // array of record values
            // using Cloudflare CDN
            proxied: false,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
    ]
}
