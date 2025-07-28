// API route to fetch all previous games of Golden State Warriors
import { BASE_URL } from '@/app/utils/staticInfo';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(
      `${BASE_URL}/searchevents.php?e=Golden%20State%20Warriors`
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    let data = await response.json();
    if (!data || !data.event || data.event.length == 0) {
      return NextResponse.json([], { status: 200 });
    }
    const transformedData = data?.event.map((event: any) => ({
      homeTeam: {
        badgeLogo: event?.strHomeTeamBadge || '',
        name: event?.strHomeTeam || 'Unknown',
        score: event?.intHomeScore || '0',
      },
      awayTeam: {
        badgeLogo: event?.strAwayTeamBadge || '',
        name: event?.strAwayTeam || 'Unknown',
        score: event?.intAwayScore || '0',
      },
      timestamp: event?.strTimestamp || '',
      video: event?.strVideo || '',
      videoThumbnail: event?.strThumb || '',
      status: event?.strStatus || 'Unknown',
    }));

    return NextResponse.json(transformedData, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching previous games:', error);
    return NextResponse.json(
      { error: true, message: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
