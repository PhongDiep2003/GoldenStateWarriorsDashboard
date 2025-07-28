// API route to fetch Golden State Warriors information
import { BASE_URL } from '@/app/utils/staticInfo';
import { NextRequest, NextResponse } from 'next/server';
export async function GET(request: NextRequest) {
  try {
    const response = await fetch(
      `${BASE_URL}/searchteams.php?t=Golden%20State%20Warriors`
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    const defaultData = {
      name: 'Unknown',
      stadium: 'Unknown',
      stadiumLocation: 'Unknown',
      stadiumCapacity: 'Unknown',
      badgeLogo: '',
      jerseyImage: '',
      story: 'No story available',
      socialLinks: {
        facebook: '',
        twitter: '',
        instagram: '',
        youtube: '',
        website: '',
      },
    };

    let data = await response.json();
    if (!data || !data.teams || data.teams.length === 0) {
      return NextResponse.json(defaultData, { status: 200 });
    }

    data = data.teams[0];
    data = {
      name: data?.strTeam || 'Unknown',
      stadium: data?.strStadium || 'Unknown',
      stadiumLocation: data?.strLocation || 'Unknown',
      stadiumCapacity: data?.intStadiumCapacity || 'Unknown',
      badgeLogo: data?.strBadge || '',
      jerseyImage: data?.strEquipment || '',
      story: data?.strDescriptionEN || 'No story available',
      socialLinks: {
        facebook: data?.strFacebook || '',
        twitter: data?.strTwitter || '',
        instagram: data?.strInstagram || '',
        youtube: data?.strYoutube || '',
        website: data?.strWebsite || '',
      },
    };
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching team info:', error);
    return NextResponse.json(
      { error: true, message: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
