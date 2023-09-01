<script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax:{inlineMath:[['\$','\$'],['\\(','\\)']],processEscapes:true},CommonHTML: {matchFontHeight:false}});</script>
<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML"></script>

# Horizons On-line Ephemeris System v4.97 の使い方メモ

HP：https://ssd.jpl.nasa.gov/horizons/

telnet: 

```
$ telnet horizons.jpl.nasa.gov 6775
```

telnetでの使い方の例．太陽（@10）を原点としたときの地球（399）の位置と速度．

```
JPL Horizons, version 4.97 
Type '?' for brief help, '?!' for details, 
'-' for previous prompt, 'x' to exit 
System news updated August 26, 2023
 
Horizons> 399
*******************************************************************************
 Revised: April 12, 2021                 Earth                              399
 
 GEOPHYSICAL PROPERTIES (revised May 9, 2022):
  Vol. Mean Radius (km)    = 6371.01+-0.02   Mass x10^24 (kg)= 5.97219+-0.0006
  Equ. radius, km          = 6378.137        Mass layers:
  Polar axis, km           = 6356.752          Atmos         = 5.1   x 10^18 kg
  Flattening               = 1/298.257223563   oceans        = 1.4   x 10^21 kg
  Density, g/cm^3          = 5.51              crust         = 2.6   x 10^22 kg
  J2 (IERS 2010)           = 0.00108262545     mantle        = 4.043 x 10^24 kg
  g_p, m/s^2  (polar)      = 9.8321863685      outer core    = 1.835 x 10^24 kg
  g_e, m/s^2  (equatorial) = 9.7803267715      inner core    = 9.675 x 10^22 kg
  g_o, m/s^2               = 9.82022         Fluid core rad  = 3480 km
  GM, km^3/s^2             = 398600.435436   Inner core rad  = 1215 km
  GM 1-sigma, km^3/s^2     =      0.0014     Escape velocity = 11.186 km/s
  Rot. Rate (rad/s)        = 0.00007292115   Surface area:
  Mean sidereal day, hr    = 23.9344695944     land          = 1.48 x 10^8 km
  Mean solar day 2000.0, s = 86400.002         sea           = 3.62 x 10^8 km
  Mean solar day 1820.0, s = 86400.0         Love no., k2    = 0.299
  Moment of inertia        = 0.3308          Atm. pressure   = 1.0 bar
  Mean surface temp (Ts), K= 287.6           Volume, km^3    = 1.08321 x 10^12
  Mean effect. temp (Te), K= 255             Magnetic moment = 0.61 gauss Rp^3
  Geometric albedo         = 0.367           Vis. mag. V(1,0)= -3.86
  Solar Constant (W/m^2)   = 1367.6 (mean), 1414 (perihelion), 1322 (aphelion)
 HELIOCENTRIC ORBIT CHARACTERISTICS:
  Obliquity to orbit, deg  = 23.4392911  Sidereal orb period  = 1.0000174 y
  Orbital speed, km/s      = 29.79       Sidereal orb period  = 365.25636 d
  Mean daily motion, deg/d = 0.9856474   Hill's sphere radius = 234.9       
*******************************************************************************
 Select ... [E]phemeris, [F]tp, [M]ail, [R]edisplay, ?, <cr>: E
 
 Observe, Elements, Vectors  [o,e,v,?] : v
 Coordinate center [ <id>,coord,geo  ] : @10
 Reference plane [eclip, frame, body ] : eclip
 Starting TDB [>= 9999BC-Mar-21 00:01] : 2023-09-01
 Ending   TDB [<=   9999-Dec-30 12:00] : 2023-09-02
 Output interval [ex: 10m, 1h, 1d, ? ] : 1d
 
 Current output table defaults --
   Ref. Frame     = ICRF
   Corrections    = NONE
   Units          = AU-D
   CSV format     = NO
   Output delta-T = NO
   Table type     = 3 (position, velocity, LT, range, range-rate)
   Vector label   = YES
 
 Accept default output [ cr=(y), n, ?] : n
 Output reference frame [ ICRF, B1950] : ICRF
 Corrections [ 1=NONE, 2=LT, 3=LT+S ]  : 1
 Output units [1=KM-S, 2=AU-D, 3=KM-D] : 3
 Spreadsheet CSV format    [ YES, NO ] : YES
 Output delta-T (TDB-UT)   [ YES, NO ] : YES
 Select output table type  [ 1-6, ?  ] : 3
 Working ... -  
*******************************************************************************
Ephemeris / PORT_LOGIN Thu Aug 31 22:00:37 2023 Pasadena, USA    / Horizons
*******************************************************************************
Target body name: Earth (399)                     {source: DE441}
Center body name: Sun (10)                        {source: DE441}
Center-site name: BODY CENTER
*******************************************************************************
Start time      : A.D. 2023-Sep-01 00:00:00.0000 TDB
Stop  time      : A.D. 2023-Sep-02 00:00:00.0000 TDB
Step-size       : 1440 minutes
*******************************************************************************
Center geodetic : 0.0, 0.0, 0.0                   {E-lon(deg),Lat(deg),Alt(km)}
Center cylindric: 0.0, 0.0, 0.0                   {E-lon(deg),Dxy(km),Dz(km)}
Center radii    : 696000.0, 696000.0, 696000.0 km {Equator_a, b, pole_c}
Output units    : KM-D
Calendar mode   : Mixed Julian/Gregorian
Output type     : GEOMETRIC cartesian states
Output format   : 3 (position, velocity, LT, range, range-rate)
Reference frame : Ecliptic of J2000.0
*******************************************************************************
            JDTDB,            Calendar Date (TDB),        delta-T,                      X,                      Y,                      Z,                     VX,                     VY,                     VZ,        
**************************************************************************************************************************************************************************************************************************
$$SOE
2460188.500000000, A.D. 2023-Sep-01 00:00:00.0000,      69.182648,  1.400066731258702E+08, -5.656864340673850E+07,  2.358117319162935E+03,  9.220286795888582E+05,  2.375474361150964E+06, -2.180159483080331E+02,  5.8297
2460189.500000000, A.D. 2023-Sep-02 00:00:00.0000,      69.182631,  1.409086515169136E+08, -5.418515162005703E+07,  2.133538944859058E+03,  8.818795576669943E+05,  2.391408949941805E+06, -2.301151491271014E+02,  5.8284
$$EOE
**************************************************************************************************************************************************************************************************************************
 
TIME

  Barycentric Dynamical Time ("TDB" or T_eph) output was requested. This
continuous coordinate time is equivalent to the relativistic proper time
of a clock at rest in a reference frame co-moving with the solar system
barycenter but outside the system's gravity well. It is the independent
variable in the solar system relativistic equations of motion.

  TDB runs at a uniform rate of one SI second per second and is independent
of irregularities in Earth's rotation.
 
CALENDAR SYSTEM

  Mixed calendar mode was active such that calendar dates after AD 1582-Oct-15
(if any) are in the modern Gregorian system. Dates prior to 1582-Oct-5 (if any)
are in the Julian calendar system, which is automatically extended for dates
prior to its adoption on 45-Jan-1 BC.  The Julian calendar is useful for
matching historical dates. The Gregorian calendar more accurately corresponds
to the Earth's orbital motion and seasons. A "Gregorian-only" calendar mode is
available if such physical events are the primary interest.

REFERENCE FRAME AND COORDINATES

  Ecliptic at the standard reference epoch

    Reference epoch: J2000.0
    X-Y plane: adopted Earth orbital plane at the reference epoch
               Note: IAU76 obliquity of 84381.448 arcseconds wrt ICRF X-Y plane
    X-axis   : ICRF
    Z-axis   : perpendicular to the X-Y plane in the directional (+ or -) sense
               of Earth's north pole at the reference epoch.

  Symbol meaning [1 day=86400.0 s]:

    JDTDB    Julian Day Number, Barycentric Dynamical Time
    del_T    Time-scale conversion difference TDB - UT (s)
      X      X-component of position vector (km)
      Y      Y-component of position vector (km)
      Z      Z-component of position vector (km)
      VX     X-component of velocity vector (km/day)                           
      VY     Y-component of velocity vector (km/day)                           
      VZ     Z-component of velocity vector (km/day)                           
      LT     One-way down-leg Newtonian light-time (day)
      RG     Range; distance from coordinate center (km)
      RR     Range-rate; radial velocity wrt coord. center (km/day)

ABERRATIONS AND CORRECTIONS

 Geometric state vectors have NO corrections or aberrations applied.

Computations by ...

    Solar System Dynamics Group, Horizons On-Line Ephemeris System
    4800 Oak Grove Drive, Jet Propulsion Laboratory
    Pasadena, CA  91109   USA

    General site: https://ssd.jpl.nasa.gov/
    Mailing list: https://ssd.jpl.nasa.gov/email_list.html
    System news : https://ssd.jpl.nasa.gov/horizons/news.html
    User Guide  : https://ssd.jpl.nasa.gov/horizons/manual.html
    Connect     : browser        https://ssd.jpl.nasa.gov/horizons/app.html#/x
                  API            https://ssd-api.jpl.nasa.gov/doc/horizons.html
                  command-line   telnet ssd.jpl.nasa.gov 6775
                  e-mail/batch   https://ssd.jpl.nasa.gov/ftp/ssd/hrzn_batch.txt
                  scripts        https://ssd.jpl.nasa.gov/ftp/ssd/SCRIPTS
    Author      : Jon.D.Giorgini@jpl.nasa.gov
*******************************************************************************
 >>> Select... [A]gain, [N]ew-case, [F]tp, [M]ail, [R]edisplay, ? : ^[OB^[OB^[OB^[OB^[OB^[OB^[OB^[OB^[OB^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[Bq
 >>> Select... [A]gain, [N]ew-case, [F]tp, [M]ail, [R]edisplay, ? : q
                                                                               
     ___    _____     ___                                                      
    /_ /|  /____/ \  /_ /|       Horizons On-line Ephemeris System v4.97       
    | | | |  __ \ /| | | |       Solar System Dynamics Group                   
 ___| | | | |__) |/  | | |__     Jet Propulsion Laboratory                     
/___| | | |  ___/    | |/__ /|   Pasadena, CA, USA                             
|_____|/  |_|/       |_____|/                                                  
 
Connection closed by foreign host.
```
