import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import tahoe from './assets/trucks/ChevyTahoe2008.jpg';
import tahoe2 from './assets/trucks/tahoe2.JPG';
import tahoe3 from './assets/trucks/tahoe3.JPG';

import tahoe16 from './assets/trucks/ChevyTahoe16.JPG'
import tahoe162 from './assets/trucks/tahoe162.JPG'
import tahoe163 from './assets/trucks/tahoe163.JPG'
import tahoe164 from './assets/trucks/tahoe164.JPG'

import kia from './assets/trucks/KiaSportage2007.JPG';
import kia2 from './assets/trucks/kia2.JPG';
import kia3 from './assets/trucks/kia3.JPG';
import kia5 from './assets/trucks/kia5.JPG';

import srx from './assets/trucks/SRX.jpeg';
import srx2 from './assets/trucks/srx2.JPEG';

import jeep from './assets/trucks/jeep.JPEG';
import jeep2 from './assets/trucks/jeep2.JPEG';
import jeep3 from './assets/trucks/jeep3.JPEG';
import jeep4 from './assets/trucks/jeep4.JPEG';

import enclave from './assets/trucks/enclave.jpeg';
import enclave1 from './assets/trucks/enclave1.jpeg';
import enclave2 from './assets/trucks/enclave2.jpeg';
import enclave3 from './assets/trucks/enclave3.jpeg';

class Suvs extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Jeep Patriot - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>103K Miles, All Power, A/C Heat, X-Clean.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={jeep} />
                    <img src={jeep2} />
                    <img src={jeep3} />
                    <img src={jeep4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Buick Enclave - $7,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>101K Miles, All Power, All Wheel Drive, Leather, Dual Sunroof, 3RD Row Seat, Rear view camera in mirror.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={enclave} />
                    <img src={enclave1} />
                    <img src={enclave2} />
                    <img src={enclave3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2008 Chevy Tahoe - $10,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>121K Miles, All Power, Third Row Seat, Cold AC, Alloy Wheels, Good Tires, Flex Fuel.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={tahoe} />
                    <img src={tahoe2} />
                    <img src={tahoe3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2007 Kia Sportage - $4,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>90K Miles, All Wheel Drive, All Power, Cold AC, Tune Up complete including Oil change.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={kia} />
                    <img src={kia2} />
                    <img src={kia3} />
                    <img src={kia5} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2016 Chevy Tahoe - $15,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>109K Miles, 3rd Row Seat, Nice Rims, Good Tires, Caddy Tail Lights, Leather.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                <img src={tahoe16} />
                  <img src={tahoe162} />
                  <img src={tahoe163} />
                  <img src={tahoe164} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Cadillac SRX - $12,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>86K Miles, V6, Front Wheel Drive, Keyless Entry, Panoramic Roof, Leather, Heated and Cooled Seats, Dual TVs, NAV, DVD, Bluetooth, Chrome Rims.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={srx} />
                    <img src={srx2} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Suvs;