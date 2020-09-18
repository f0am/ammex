const waps = [
  {
    id: 1,
    vlanId: 900,
    vlanName: 'WAPs 1',
    network: '10.43.22.224',
    netMask: '255.255.255.0',
    gatewayIP: '10.22.80.196',
    hostsCount: 250,
    dhcpIpRange: '10.22.80.196 - 10.22.80.196',
    dhcpLeaseTime: 7
  },
  {
    id: 2,
    vlanId: 900,
    vlanName: 'WAPs 2',
    network: '10.43.22.224',
    netMask: '255.255.255.0',
    gatewayIP: '10.22.80.196',
    hostsCount: 250,
    dhcpIpRange: '10.22.80.196 - 10.22.80.196',
    dhcpLeaseTime: 7
  },
  {
    id: 3,
    vlanId: 900,
    vlanName: 'WAPs 3',
    network: '10.43.22.224',
    netMask: '255.255.255.0',
    gatewayIP: '10.22.80.196',
    hostsCount: 250,
    dhcpIpRange: '10.22.80.196 - 10.22.80.196',
    dhcpLeaseTime: 7
  },
  {
    id: 4,
    vlanId: 900,
    vlanName: 'WAPs 4',
    network: '10.43.22.224',
    netMask: '255.255.255.0',
    gatewayIP: '10.22.80.196',
    hostsCount: 250,
    dhcpIpRange: '10.22.80.196 - 10.22.80.196',
    dhcpLeaseTime: 7
  }
]

export default {
  getWAPs: () => {
    return waps
  }
}
