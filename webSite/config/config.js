module.exports = {
 debug: true, // Boolean
 whitelist_enabled: false,
 allowed_ips: ["::ffff:59.149.31.198"], // Array with IP's
 bot: {
  type: ["Ticket", "Chat"],
  statustype: ["Online", "Dnd", "Idle"],
 },
 teams: [
  {
   name: "Masterious",
   avatar: "masterious.png",
   description: "Founder of Azury.live",
   whatheis: "Founder",
  },
  {
   name: "/kai",
   avatar: "kai.gif",
   description: "Developer at azury.live",
   whatheis: "Weirdo",
  },
 ],
};
