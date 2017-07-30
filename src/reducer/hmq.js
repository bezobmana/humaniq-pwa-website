import moment from 'moment';

const hmqInit = {
  data:{
    year: [{"date":"2016-05-24, 00:00:00","value":0.6},{"date":"2016-05-27, 00:00:00","value":0.5340214051428789},{"date":"2016-05-30, 00:00:00","value":0.7615021159514526},{"date":"2016-06-02, 00:00:00","value":1.22679025951845},{"date":"2016-06-05, 00:00:00","value":1.1370589009662186},{"date":"2016-06-08, 00:00:00","value":1.0345130408892471},{"date":"2016-06-11, 00:00:00","value":1.423021108735368},{"date":"2016-06-14, 00:00:00","value":1.2147659603151733},{"date":"2016-06-17, 00:00:00","value":0.7274604222759928},{"date":"2016-06-20, 00:00:00","value":0.6},{"date":"2016-06-23, 00:00:00","value":0.6513444297535869},{"date":"2016-06-26, 00:00:00","value":0.7016225344659448},{"date":"2016-06-29, 00:00:00","value":0.8249100500495987},{"date":"2016-07-02, 00:00:00","value":1.2680377854039673},{"date":"2016-07-05, 00:00:00","value":1.1596729113130546},{"date":"2016-07-08, 00:00:00","value":1.321233876035228},{"date":"2016-07-11, 00:00:00","value":1.4550967751956196},{"date":"2016-07-14, 00:00:00","value":1.4650428186149995},{"date":"2016-07-17, 00:00:00","value":0.9664917901446504},{"date":"2016-07-20, 00:00:00","value":1.230653105836356},{"date":"2016-07-23, 00:00:00","value":1.6101742488919246},{"date":"2016-07-26, 00:00:00","value":1.3717597041106457},{"date":"2016-07-29, 00:00:00","value":1.2278625286341909},{"date":"2016-08-01, 00:00:00","value":1.6091770110778056},{"date":"2016-08-04, 00:00:00","value":1.1825043971546916},{"date":"2016-08-07, 00:00:00","value":1.401377960568019},{"date":"2016-08-10, 00:00:00","value":0.9098704435407858},{"date":"2016-08-13, 00:00:00","value":0.6882638304990776},{"date":"2016-08-16, 00:00:00","value":0.6},{"date":"2016-08-19, 00:00:00","value":0.8217819081312667},{"date":"2016-08-22, 00:00:00","value":1.1256616781487772},{"date":"2016-08-25, 00:00:00","value":1.1487206215416146},{"date":"2016-08-28, 00:00:00","value":1.2988282370856774},{"date":"2016-08-31, 00:00:00","value":1.3805764219343313},{"date":"2016-09-03, 00:00:00","value":1.062151035966087},{"date":"2016-09-06, 00:00:00","value":1.0338546693428758},{"date":"2016-09-09, 00:00:00","value":0.8561531982629385},{"date":"2016-09-12, 00:00:00","value":0.7273968496754291},{"date":"2016-09-15, 00:00:00","value":1.0957392131189654},{"date":"2016-09-18, 00:00:00","value":1.0834951121585303},{"date":"2016-09-21, 00:00:00","value":1.4491080667090699},{"date":"2016-09-24, 00:00:00","value":1.3796355038696335},{"date":"2016-09-27, 00:00:00","value":1.3181604487551966},{"date":"2016-09-30, 00:00:00","value":1.554784363194634},{"date":"2016-10-03, 00:00:00","value":1.7496195018739327},{"date":"2016-10-06, 00:00:00","value":1.461984915850066},{"date":"2016-10-09, 00:00:00","value":1.485778374952283},{"date":"2016-10-12, 00:00:00","value":1.6323397245846918},{"date":"2016-10-15, 00:00:00","value":1.6960751608947646},{"date":"2016-10-18, 00:00:00","value":2.0992649351061115},{"date":"2016-10-21, 00:00:00","value":1.7259772507850055},{"date":"2016-10-24, 00:00:00","value":1.3830576734729407},{"date":"2016-10-27, 00:00:00","value":1.2463930844398508},{"date":"2016-10-30, 00:00:00","value":1.2318707001723483},{"date":"2016-11-02, 00:00:00","value":1.3460837194923878},{"date":"2016-11-05, 00:00:00","value":1.5418728788092677},{"date":"2016-11-08, 00:00:00","value":1.1990900314197253},{"date":"2016-11-11, 00:00:00","value":1.1674770423659206},{"date":"2016-11-14, 00:00:00","value":0.6845080223129321},{"date":"2016-11-17, 00:00:00","value":1.0401085785878246},{"date":"2016-11-20, 00:00:00","value":1.5136024033645583},{"date":"2016-11-23, 00:00:00","value":1.3282201350228726},{"date":"2016-11-26, 00:00:00","value":1.3571806958610328},{"date":"2016-11-29, 00:00:00","value":0.9713812762357119},{"date":"2016-12-02, 00:00:00","value":1.4475225350065495},{"date":"2016-12-05, 00:00:00","value":1.5772323477203258},{"date":"2016-12-08, 00:00:00","value":1.1969825233831102},{"date":"2016-12-11, 00:00:00","value":1.2582889929396466},{"date":"2016-12-14, 00:00:00","value":1.6642440120523934},{"date":"2016-12-17, 00:00:00","value":1.2515049452755767},{"date":"2016-12-20, 00:00:00","value":1.6508152060142258},{"date":"2016-12-23, 00:00:00","value":1.534937380342404},{"date":"2016-12-26, 00:00:00","value":1.8080918216971833},{"date":"2016-12-29, 00:00:00","value":1.8750575448666646},{"date":"2017-01-01, 00:00:00","value":2.121518223904104},{"date":"2017-01-04, 00:00:00","value":1.75699255390432},{"date":"2017-01-07, 00:00:00","value":2.197836575737533},{"date":"2017-01-10, 00:00:00","value":2.194483627996318},{"date":"2017-01-13, 00:00:00","value":2.138828640171526},{"date":"2017-01-16, 00:00:00","value":1.9936400085086285},{"date":"2017-01-19, 00:00:00","value":1.7924398062421538},{"date":"2017-01-22, 00:00:00","value":1.5765126042663113},{"date":"2017-01-25, 00:00:00","value":1.1292713662450575},{"date":"2017-01-28, 00:00:00","value":1.1263280637217779},{"date":"2017-01-31, 00:00:00","value":0.6663318902383673},{"date":"2017-02-03, 00:00:00","value":1.0453090217607033},{"date":"2017-02-06, 00:00:00","value":0.834033540560124},{"date":"2017-02-09, 00:00:00","value":0.6},{"date":"2017-02-12, 00:00:00","value":0.9574199433098167},{"date":"2017-02-15, 00:00:00","value":0.6576189409433506},{"date":"2017-02-18, 00:00:00","value":1.0639311188133735},{"date":"2017-02-21, 00:00:00","value":1.2240846360073778},{"date":"2017-02-24, 00:00:00","value":1.0891037919638058},{"date":"2017-02-27, 00:00:00","value":1.0694844119672677},{"date":"2017-03-02, 00:00:00","value":1.2486209793800715},{"date":"2017-03-05, 00:00:00","value":1.6476822757447032},{"date":"2017-03-08, 00:00:00","value":1.3462721980752828},{"date":"2017-03-11, 00:00:00","value":1.1133422488259008},{"date":"2017-03-14, 00:00:00","value":0.6731285659887214},{"date":"2017-03-17, 00:00:00","value":0.7038001927308},{"date":"2017-03-20, 00:00:00","value":0.6},{"date":"2017-03-23, 00:00:00","value":0.746584755106718},{"date":"2017-03-26, 00:00:00","value":0.7010434504079439},{"date":"2017-03-29, 00:00:00","value":0.6},{"date":"2017-04-01, 00:00:00","value":0.964942413183536},{"date":"2017-04-04, 00:00:00","value":0.9237055745592033},{"date":"2017-04-07, 00:00:00","value":1.1370044769051193},{"date":"2017-04-10, 00:00:00","value":1.516900509877022},{"date":"2017-04-13, 00:00:00","value":1.3147868975564831},{"date":"2017-04-16, 00:00:00","value":1.4490356631936474},{"date":"2017-04-19, 00:00:00","value":1.6297251652079217},{"date":"2017-04-22, 00:00:00","value":1.5472255573196456},{"date":"2017-04-25, 00:00:00","value":1.912907189994982},{"date":"2017-04-28, 00:00:00","value":2.3529853925107322},{"date":"2017-05-01, 00:00:00","value":2.309449846882016},{"date":"2017-05-04, 00:00:00","value":1.9433809295104787},{"date":"2017-05-07, 00:00:00","value":2.124648896601224},{"date":"2017-05-10, 00:00:00","value":2.1657477320720764},{"date":"2017-05-13, 00:00:00","value":2.63331969372494},{"date":"2017-05-16, 00:00:00","value":2.2533619376139873},{"date":"2017-05-19, 00:00:00","value":2.405183015649444},{"date":"2017-05-22, 00:00:00","value":1.980252286874137}],
    month: [{"date":"2017-04-24, 00:00:00","value":1.5617463116310795},{"date":"2017-04-25, 00:00:00","value":1.40571047124835},{"date":"2017-04-26, 00:00:00","value":1.1096039777732392},{"date":"2017-04-27, 00:00:00","value":0.77375555220435},{"date":"2017-04-28, 00:00:00","value":0.6},{"date":"2017-04-29, 00:00:00","value":0.7538407480627471},{"date":"2017-04-30, 00:00:00","value":1.2418162862575757},{"date":"2017-05-01, 00:00:00","value":1.570672337968107},{"date":"2017-05-02, 00:00:00","value":1.776480102175178},{"date":"2017-05-03, 00:00:00","value":1.44549143928751},{"date":"2017-05-04, 00:00:00","value":1.8687629734682405},{"date":"2017-05-05, 00:00:00","value":2.3308017516666855},{"date":"2017-05-06, 00:00:00","value":2.064192103909466},{"date":"2017-05-07, 00:00:00","value":1.8725216925215058},{"date":"2017-05-08, 00:00:00","value":2.1929068797878712},{"date":"2017-05-09, 00:00:00","value":1.7534780176988574},{"date":"2017-05-10, 00:00:00","value":2.099718494992818},{"date":"2017-05-11, 00:00:00","value":2.08148009550971},{"date":"2017-05-12, 00:00:00","value":1.8291125263685521},{"date":"2017-05-13, 00:00:00","value":1.4092814515609162},{"date":"2017-05-14, 00:00:00","value":1.9075032303434005},{"date":"2017-05-15, 00:00:00","value":1.8417044128436642},{"date":"2017-05-16, 00:00:00","value":2.025896026978158},{"date":"2017-05-17, 00:00:00","value":2.3167289686599775},{"date":"2017-05-18, 00:00:00","value":2.5468705315430737},{"date":"2017-05-19, 00:00:00","value":2.80471720498797},{"date":"2017-05-20, 00:00:00","value":2.4335494681366803},{"date":"2017-05-21, 00:00:00","value":2.8292424684789705},{"date":"2017-05-22, 00:00:00","value":3.234144884186102},{"date":"2017-05-23, 00:00:00","value":2.9654292477915067},{"date":"2017-05-24, 00:00:00","value":3.284219625692474}],
    week: [{"date":"2017-05-17, 00:00:00","value":0.9294571296522505},{"date":"2017-05-17, 06:00:00","value":1.0088436460311618},{"date":"2017-05-17, 12:00:00","value":0.7746125951782725},{"date":"2017-05-17, 18:00:00","value":0.957795973424959},{"date":"2017-05-18, 00:00:00","value":0.7636498028329783},{"date":"2017-05-18, 06:00:00","value":0.6},{"date":"2017-05-18, 12:00:00","value":0.9887625954191082},{"date":"2017-05-18, 18:00:00","value":0.6},{"date":"2017-05-19, 00:00:00","value":0.8827543396595678},{"date":"2017-05-19, 06:00:00","value":1.2663029961849726},{"date":"2017-05-19, 12:00:00","value":0.9589623626532342},{"date":"2017-05-19, 18:00:00","value":1.3847715815367414},{"date":"2017-05-20, 00:00:00","value":1.7245487726222075},{"date":"2017-05-20, 06:00:00","value":1.3313863496702185},{"date":"2017-05-20, 12:00:00","value":1.691099856363751},{"date":"2017-05-20, 18:00:00","value":1.278831023545432},{"date":"2017-05-21, 00:00:00","value":1.7614281089907609},{"date":"2017-05-21, 06:00:00","value":2.041953450693627},{"date":"2017-05-21, 12:00:00","value":2.2022960395739464},{"date":"2017-05-21, 18:00:00","value":1.9527568273397624},{"date":"2017-05-22, 00:00:00","value":2.132680110982995},{"date":"2017-05-22, 06:00:00","value":2.214649800175899},{"date":"2017-05-22, 12:00:00","value":1.9412719995728533},{"date":"2017-05-22, 18:00:00","value":1.7612412557463335},{"date":"2017-05-23, 00:00:00","value":1.4358006126634248},{"date":"2017-05-23, 06:00:00","value":1.1147370719613336},{"date":"2017-05-23, 12:00:00","value":0.8677202547209231},{"date":"2017-05-23, 18:00:00","value":0.6},{"date":"2017-05-24, 00:00:00","value":0.8282808799667563}],
    day: [{"date":"2017-05-23, 00:00:00","value":1.5039324573136241},{"date":"2017-05-23, 00:30:00","value":1.7050566612726463},{"date":"2017-05-23, 01:00:00","value":1.9103183344566963},{"date":"2017-05-23, 01:30:00","value":2.385123695729722},{"date":"2017-05-23, 02:00:00","value":2.078062403114745},{"date":"2017-05-23, 02:30:00","value":2.297132181966861},{"date":"2017-05-23, 03:00:00","value":2.150789407597033},{"date":"2017-05-23, 03:30:00","value":1.8510899154672948},{"date":"2017-05-23, 04:00:00","value":2.1678614327107377},{"date":"2017-05-23, 04:30:00","value":2.0630566884082935},{"date":"2017-05-23, 05:00:00","value":2.326948155092105},{"date":"2017-05-23, 05:30:00","value":2.327252661099998},{"date":"2017-05-23, 06:00:00","value":2.3879055360141996},{"date":"2017-05-23, 06:30:00","value":2.1715076728685965},{"date":"2017-05-23, 07:00:00","value":2.4155615608013505},{"date":"2017-05-23, 07:30:00","value":2.078999737359335},{"date":"2017-05-23, 08:00:00","value":1.7964161195236001},{"date":"2017-05-23, 08:30:00","value":1.7925163733110026},{"date":"2017-05-23, 09:00:00","value":2.142768336379373},{"date":"2017-05-23, 09:30:00","value":1.7213099408572807},{"date":"2017-05-23, 10:00:00","value":1.233159496421859},{"date":"2017-05-23, 10:30:00","value":1.493779876384597},{"date":"2017-05-23, 11:00:00","value":1.761117318202559},{"date":"2017-05-23, 11:30:00","value":1.8765706640826707},{"date":"2017-05-23, 12:00:00","value":2.057071995768972},{"date":"2017-05-23, 12:30:00","value":2.105257403787679},{"date":"2017-05-23, 13:00:00","value":2.375994329689087},{"date":"2017-05-23, 13:30:00","value":2.4795804512286423},{"date":"2017-05-23, 14:00:00","value":2.000676170954237},{"date":"2017-05-23, 14:30:00","value":1.7193237726384476},{"date":"2017-05-23, 15:00:00","value":1.975196193653617},{"date":"2017-05-23, 15:30:00","value":1.941459020918335},{"date":"2017-05-23, 16:00:00","value":2.0177710076688395},{"date":"2017-05-23, 16:30:00","value":2.319010669603324},{"date":"2017-05-23, 17:00:00","value":2.5706754918127164},{"date":"2017-05-23, 17:30:00","value":3.0276746720714827},{"date":"2017-05-23, 18:00:00","value":2.852033948200962},{"date":"2017-05-23, 18:30:00","value":2.779087526469338},{"date":"2017-05-23, 19:00:00","value":2.863377493153573},{"date":"2017-05-23, 19:30:00","value":2.5142330387110303},{"date":"2017-05-23, 20:00:00","value":2.3055603087992855},{"date":"2017-05-23, 20:30:00","value":2.557928798835926},{"date":"2017-05-23, 21:00:00","value":2.958437089758465},{"date":"2017-05-23, 21:30:00","value":3.151841697078105},{"date":"2017-05-23, 22:00:00","value":3.354049549907205},{"date":"2017-05-23, 22:30:00","value":3.0422529055459027},{"date":"2017-05-23, 23:00:00","value":2.865053573086522},{"date":"2017-05-23, 23:30:00","value":2.9875365266203335},{"date":"2017-05-24, 00:00:00","value":3.271249333750084}],
    hour: [{"date":"2017-05-24, 18:00:00","value":0.8635689885673918},{"date":"2017-05-24, 18:00:30","value":1.3003747758682296},{"date":"2017-05-24, 18:01:00","value":0.8261430354549855},{"date":"2017-05-24, 18:01:30","value":1.0321571150692768},{"date":"2017-05-24, 18:02:00","value":0.8588584883118104},{"date":"2017-05-24, 18:02:30","value":1.2515364682223924},{"date":"2017-05-24, 18:03:00","value":0.8075302046066954},{"date":"2017-05-24, 18:03:30","value":1.0596246423373814},{"date":"2017-05-24, 18:04:00","value":1.132352694572088},{"date":"2017-05-24, 18:04:30","value":0.6566787996327992},{"date":"2017-05-24, 18:05:00","value":0.6},{"date":"2017-05-24, 18:05:30","value":0.33553764891696536},{"date":"2017-05-24, 18:06:00","value":0.6},{"date":"2017-05-24, 18:06:30","value":0.4371291641229983},{"date":"2017-05-24, 18:07:00","value":0.6},{"date":"2017-05-24, 18:07:30","value":1.0008795919793902},{"date":"2017-05-24, 18:08:00","value":1.3994069762310184},{"date":"2017-05-24, 18:08:30","value":1.7659575265046414},{"date":"2017-05-24, 18:09:00","value":2.106107154154369},{"date":"2017-05-24, 18:09:30","value":1.7367991776425438},{"date":"2017-05-24, 18:10:00","value":1.5516275679459541},{"date":"2017-05-24, 18:10:30","value":1.9833297937244767},{"date":"2017-05-24, 18:11:00","value":2.321225682765161},{"date":"2017-05-24, 18:11:30","value":2.651114164235816},{"date":"2017-05-24, 18:12:00","value":2.9357666149834154},{"date":"2017-05-24, 18:12:30","value":2.5428582700974305},{"date":"2017-05-24, 18:13:00","value":2.750576330566841},{"date":"2017-05-24, 18:13:30","value":3.0391914329267173},{"date":"2017-05-24, 18:14:00","value":3.4377630100768903},{"date":"2017-05-24, 18:14:30","value":3.1729457851832352},{"date":"2017-05-24, 18:15:00","value":3.0864534763911844},{"date":"2017-05-24, 18:15:30","value":3.2900707541768943},{"date":"2017-05-24, 18:16:00","value":3.27042198509257},{"date":"2017-05-24, 18:16:30","value":3.528677939797708},{"date":"2017-05-24, 18:17:00","value":3.723754597265387},{"date":"2017-05-24, 18:17:30","value":3.6789505627373895},{"date":"2017-05-24, 18:18:00","value":3.305638044366467},{"date":"2017-05-24, 18:18:30","value":2.9909063846563906},{"date":"2017-05-24, 18:19:00","value":3.0873988642635766},{"date":"2017-05-24, 18:19:30","value":3.4602497420602996},{"date":"2017-05-24, 18:20:00","value":3.4834351458321042},{"date":"2017-05-24, 18:20:30","value":3.3844934935393933},{"date":"2017-05-24, 18:21:00","value":3.658447214443518},{"date":"2017-05-24, 18:21:30","value":3.8608689558750813},{"date":"2017-05-24, 18:22:00","value":3.9270498829063127},{"date":"2017-05-24, 18:22:30","value":3.4840267003470844},{"date":"2017-05-24, 18:23:00","value":3.7172762759548164},{"date":"2017-05-24, 18:23:30","value":3.940093037163968},{"date":"2017-05-24, 18:24:00","value":3.6538559594721063},{"date":"2017-05-24, 18:24:30","value":4.066151561897723},{"date":"2017-05-24, 18:25:00","value":3.6343591051897866},{"date":"2017-05-24, 18:25:30","value":3.2238556121552415},{"date":"2017-05-24, 18:26:00","value":2.8421820415768595},{"date":"2017-05-24, 18:26:30","value":3.1285586662901617},{"date":"2017-05-24, 18:27:00","value":3.311767130961096},{"date":"2017-05-24, 18:27:30","value":3.6681028799065736},{"date":"2017-05-24, 18:28:00","value":3.190242813379786},{"date":"2017-05-24, 18:28:30","value":3.471618636343022},{"date":"2017-05-24, 18:29:00","value":3.4271946774290853},{"date":"2017-05-24, 18:29:30","value":3.915668548142042},{"date":"2017-05-24, 18:30:00","value":3.9784283107292753},{"date":"2017-05-24, 18:30:30","value":3.8949532173023202},{"date":"2017-05-24, 18:31:00","value":3.66104313040893},{"date":"2017-05-24, 18:31:30","value":3.5686351364006184},{"date":"2017-05-24, 18:32:00","value":3.48330885578003},{"date":"2017-05-24, 18:32:30","value":3.2094665482174953},{"date":"2017-05-24, 18:33:00","value":3.2756944308349283},{"date":"2017-05-24, 18:33:30","value":3.336665006769662},{"date":"2017-05-24, 18:34:00","value":3.332288058341039},{"date":"2017-05-24, 18:34:30","value":3.393933253099154},{"date":"2017-05-24, 18:35:00","value":3.7256735236905145},{"date":"2017-05-24, 18:35:30","value":3.4489195453579784},{"date":"2017-05-24, 18:36:00","value":3.2293527400409197},{"date":"2017-05-24, 18:36:30","value":3.106624343727037},{"date":"2017-05-24, 18:37:00","value":2.765830965079863},{"date":"2017-05-24, 18:37:30","value":2.707355070702995},{"date":"2017-05-24, 18:38:00","value":2.6539748992612995},{"date":"2017-05-24, 18:38:30","value":2.1965214121555823},{"date":"2017-05-24, 18:39:00","value":2.194397114827873},{"date":"2017-05-24, 18:39:30","value":2.153212568363988},{"date":"2017-05-24, 18:40:00","value":2.1723465592776527},{"date":"2017-05-24, 18:40:30","value":1.847426840527321},{"date":"2017-05-24, 18:41:00","value":1.7239822512898186},{"date":"2017-05-24, 18:41:30","value":1.320892834682203},{"date":"2017-05-24, 18:42:00","value":1.1399806537998074},{"date":"2017-05-24, 18:42:30","value":1.0716527173391983},{"date":"2017-05-24, 18:43:00","value":1.5514220825300384},{"date":"2017-05-24, 18:43:30","value":1.7965846710828668},{"date":"2017-05-24, 18:44:00","value":1.9441374741432553},{"date":"2017-05-24, 18:44:30","value":2.298673032349275},{"date":"2017-05-24, 18:45:00","value":2.4790069401519066},{"date":"2017-05-24, 18:45:30","value":2.697161591700471},{"date":"2017-05-24, 18:46:00","value":2.5415474890713554},{"date":"2017-05-24, 18:46:30","value":2.2584290822201467},{"date":"2017-05-24, 18:47:00","value":2.53944650704898},{"date":"2017-05-24, 18:47:30","value":2.1207958240442633},{"date":"2017-05-24, 18:48:00","value":1.6460893801532426},{"date":"2017-05-24, 18:48:30","value":1.34312249202963},{"date":"2017-05-24, 18:49:00","value":1.3128019907245776},{"date":"2017-05-24, 18:49:30","value":1.7409308715156708},{"date":"2017-05-24, 18:50:00","value":2.226439859775364},{"date":"2017-05-24, 18:50:30","value":2.2821648968654697},{"date":"2017-05-24, 18:51:00","value":2.5210267130616995},{"date":"2017-05-24, 18:51:30","value":2.5220026399277833},{"date":"2017-05-24, 18:52:00","value":2.687052921386792},{"date":"2017-05-24, 18:52:30","value":2.2595599180236468},{"date":"2017-05-24, 18:53:00","value":2.2938173159434547},{"date":"2017-05-24, 18:53:30","value":2.113082486587281},{"date":"2017-05-24, 18:54:00","value":2.428570837399386},{"date":"2017-05-24, 18:54:30","value":2.1136430121637337},{"date":"2017-05-24, 18:55:00","value":2.0730132716815435},{"date":"2017-05-24, 18:55:30","value":1.620646954370272},{"date":"2017-05-24, 18:56:00","value":1.1770430409167312},{"date":"2017-05-24, 18:56:30","value":1.0956514201590615},{"date":"2017-05-24, 18:57:00","value":0.8037465359540559},{"date":"2017-05-24, 18:57:30","value":0.853761002573515},{"date":"2017-05-24, 18:58:00","value":1.0810147229001559},{"date":"2017-05-24, 18:58:30","value":1.4343043191962914},{"date":"2017-05-24, 18:59:00","value":1.7986231149937497},{"date":"2017-05-24, 18:59:30","value":2.009210282615892},{"date":"2017-05-24, 19:00:00","value":1.9047840746620683}],
    all: [{"date":"2015-01-01, 18:00:00","value":1.3233307217679506},{"date":"2015-01-04, 18:00:00","value":1.5251452955511207},{"date":"2015-01-07, 18:00:00","value":1.5888746663920523},{"date":"2015-01-10, 18:00:00","value":1.4721830173637909},{"date":"2015-01-13, 18:00:00","value":1.4941980591381718},{"date":"2015-01-16, 18:00:00","value":1.4146304747647194},{"date":"2015-01-19, 18:00:00","value":1.2062395089076525},{"date":"2015-01-22, 18:00:00","value":1.3300595431950397},{"date":"2015-01-25, 18:00:00","value":1.3823023903213556},{"date":"2015-01-28, 18:00:00","value":0.9809747912227655},{"date":"2015-01-31, 18:00:00","value":1.1987392515483062},{"date":"2015-02-03, 18:00:00","value":0.9510891505604195},{"date":"2015-02-06, 18:00:00","value":0.8344436553083199},{"date":"2015-02-09, 18:00:00","value":0.9007419672606696},{"date":"2015-02-12, 18:00:00","value":0.7221115096699593},{"date":"2015-02-15, 18:00:00","value":0.7265237746990494},{"date":"2015-02-18, 18:00:00","value":1.2112245987907193},{"date":"2015-02-21, 18:00:00","value":1.1370751144222646},{"date":"2015-02-24, 18:00:00","value":1.35586978949502},{"date":"2015-02-27, 18:00:00","value":1.575648745215712},{"date":"2015-03-02, 18:00:00","value":1.0958845218727713},{"date":"2015-03-05, 18:00:00","value":0.619537584975552},{"date":"2015-03-08, 18:00:00","value":0.9428119787114855},{"date":"2015-03-11, 18:00:00","value":1.2123449460546285},{"date":"2015-03-14, 18:00:00","value":0.9012863320098732},{"date":"2015-03-17, 18:00:00","value":1.1228140658453927},{"date":"2015-03-20, 18:00:00","value":0.6270029745164063},{"date":"2015-03-23, 18:00:00","value":1.0443818022476337},{"date":"2015-03-26, 18:00:00","value":0.6096070799941666},{"date":"2015-03-29, 18:00:00","value":0.6},{"date":"2015-04-01, 18:00:00","value":1.0653784124397232},{"date":"2015-04-04, 18:00:00","value":0.9717321548609157},{"date":"2015-04-07, 18:00:00","value":1.3152801450967249},{"date":"2015-04-10, 18:00:00","value":0.8199522361400098},{"date":"2015-04-13, 18:00:00","value":0.7898776046276157},{"date":"2015-04-16, 18:00:00","value":0.9681203878513465},{"date":"2015-04-19, 18:00:00","value":1.3494891096647574},{"date":"2015-04-22, 18:00:00","value":1.6511474005434916},{"date":"2015-04-25, 18:00:00","value":1.1854232426131193},{"date":"2015-04-28, 18:00:00","value":0.8503806360488517},{"date":"2015-05-01, 18:00:00","value":0.6},{"date":"2015-05-04, 18:00:00","value":0.9726830535083844},{"date":"2015-05-07, 18:00:00","value":0.6},{"date":"2015-05-10, 18:00:00","value":0.7804856655263497},{"date":"2015-05-13, 18:00:00","value":0.7595073976858362},{"date":"2015-05-16, 18:00:00","value":0.6},{"date":"2015-05-19, 18:00:00","value":0.30622421764641616},{"date":"2015-05-22, 18:00:00","value":0.6},{"date":"2015-05-25, 18:00:00","value":0.6221954480882999},{"date":"2015-05-28, 18:00:00","value":0.6},{"date":"2015-05-31, 18:00:00","value":0.9460579434764078},{"date":"2015-06-03, 18:00:00","value":0.9182820773084011},{"date":"2015-06-06, 18:00:00","value":1.2652498621614312},{"date":"2015-06-09, 18:00:00","value":1.6549374441431364},{"date":"2015-06-12, 18:00:00","value":1.2715094259511865},{"date":"2015-06-15, 18:00:00","value":0.8902115828963846},{"date":"2015-06-18, 18:00:00","value":0.6},{"date":"2015-06-21, 18:00:00","value":0.21899421899799199},{"date":"2015-06-24, 18:00:00","value":0.6},{"date":"2015-06-27, 18:00:00","value":0.9786665373019066},{"date":"2015-06-30, 18:00:00","value":1.3960795776995865},{"date":"2015-07-03, 18:00:00","value":1.2559114261043824},{"date":"2015-07-06, 18:00:00","value":0.887976372759385},{"date":"2015-07-09, 18:00:00","value":0.6},{"date":"2015-07-12, 18:00:00","value":0.9933545130070476},{"date":"2015-07-15, 18:00:00","value":0.6233599125696732},{"date":"2015-07-18, 18:00:00","value":0.6},{"date":"2015-07-21, 18:00:00","value":0.6830333447635621},{"date":"2015-07-24, 18:00:00","value":0.7905203967910819},{"date":"2015-07-27, 18:00:00","value":0.6684622873129227},{"date":"2015-07-30, 18:00:00","value":0.9931987687773827},{"date":"2015-08-02, 18:00:00","value":0.7921627782055229},{"date":"2015-08-05, 18:00:00","value":1.2827380139737654},{"date":"2015-08-08, 18:00:00","value":1.7097870232373062},{"date":"2015-08-11, 18:00:00","value":2.1355433569564584},{"date":"2015-08-14, 18:00:00","value":1.9328484124077159},{"date":"2015-08-17, 18:00:00","value":2.051296939030734},{"date":"2015-08-20, 18:00:00","value":2.0850742680062524},{"date":"2015-08-23, 18:00:00","value":2.2483116301796913},{"date":"2015-08-26, 18:00:00","value":2.321322246930313},{"date":"2015-08-29, 18:00:00","value":2.7468981099878684},{"date":"2015-09-01, 18:00:00","value":2.7543040127025327},{"date":"2015-09-04, 18:00:00","value":2.640297650581271},{"date":"2015-09-07, 18:00:00","value":2.6644198472027183},{"date":"2015-09-10, 18:00:00","value":2.6025372082002445},{"date":"2015-09-13, 18:00:00","value":2.2104352277169763},{"date":"2015-09-16, 18:00:00","value":1.8163632560410625},{"date":"2015-09-19, 18:00:00","value":1.7972998700319032},{"date":"2015-09-22, 18:00:00","value":2.0160758980190123},{"date":"2015-09-25, 18:00:00","value":2.21037082490191},{"date":"2015-09-28, 18:00:00","value":1.7883955817833872},{"date":"2015-10-01, 18:00:00","value":1.70436340757949},{"date":"2015-10-04, 18:00:00","value":1.9938925956301166},{"date":"2015-10-07, 18:00:00","value":1.7516291759056104},{"date":"2015-10-10, 18:00:00","value":1.4980968554298555},{"date":"2015-10-13, 18:00:00","value":1.1564928399009096},{"date":"2015-10-16, 18:00:00","value":1.015915221654336},{"date":"2015-10-19, 18:00:00","value":0.8153882877256038},{"date":"2015-10-22, 18:00:00","value":1.0902059817773762},{"date":"2015-10-25, 18:00:00","value":1.1249259362590898},{"date":"2015-10-28, 18:00:00","value":0.7516759151247501},{"date":"2015-10-31, 18:00:00","value":0.6},{"date":"2015-11-03, 18:00:00","value":0.12950087222730866},{"date":"2015-11-06, 18:00:00","value":0.6},{"date":"2015-11-09, 18:00:00","value":0.16934177188337507},{"date":"2015-11-12, 18:00:00","value":0.6},{"date":"2015-11-15, 18:00:00","value":1.0447426627843686},{"date":"2015-11-18, 18:00:00","value":1.2851275906885533},{"date":"2015-11-21, 18:00:00","value":1.5394087661744615},{"date":"2015-11-24, 18:00:00","value":1.398892327580396},{"date":"2015-11-27, 18:00:00","value":0.9080696068580318},{"date":"2015-11-30, 18:00:00","value":1.1407800420908554},{"date":"2015-12-03, 18:00:00","value":1.2427450544269107},{"date":"2015-12-06, 18:00:00","value":1.578561434439505},{"date":"2015-12-09, 18:00:00","value":1.6004178786079928},{"date":"2015-12-12, 18:00:00","value":1.3159269664930398},{"date":"2015-12-15, 18:00:00","value":1.2818621550550655},{"date":"2015-12-18, 18:00:00","value":1.3497698093625168},{"date":"2015-12-21, 18:00:00","value":1.139228523045472},{"date":"2015-12-24, 18:00:00","value":1.3064684358265266},{"date":"2015-12-27, 18:00:00","value":1.4288060449399465},{"date":"2015-12-30, 18:00:00","value":1.2640353652602956},{"date":"2016-01-02, 18:00:00","value":0.9532095826028828},{"date":"2016-01-05, 18:00:00","value":1.4274404834623335},{"date":"2016-01-08, 18:00:00","value":1.835508976294241},{"date":"2016-01-11, 18:00:00","value":1.5494595831806288},{"date":"2016-01-14, 18:00:00","value":1.6754681305021717},{"date":"2016-01-17, 18:00:00","value":1.8240187326576516},{"date":"2016-01-20, 18:00:00","value":2.3005677613568567},{"date":"2016-01-23, 18:00:00","value":1.939662974555881},{"date":"2016-01-26, 18:00:00","value":1.7372208101640183},{"date":"2016-01-29, 18:00:00","value":1.8829574431953695},{"date":"2016-02-01, 18:00:00","value":1.768246997187572},{"date":"2016-02-04, 18:00:00","value":2.2074218038446265},{"date":"2016-02-07, 18:00:00","value":2.1910157658633773},{"date":"2016-02-10, 18:00:00","value":2.0444117268323048},{"date":"2016-02-13, 18:00:00","value":2.023934745049087},{"date":"2016-02-16, 18:00:00","value":2.3926582861949037},{"date":"2016-02-19, 18:00:00","value":2.5184012877889947},{"date":"2016-02-22, 18:00:00","value":2.7109538316207407},{"date":"2016-02-25, 18:00:00","value":2.62688546134648},{"date":"2016-02-28, 18:00:00","value":2.7005523127844304},{"date":"2016-03-02, 18:00:00","value":2.425092316685798},{"date":"2016-03-05, 18:00:00","value":2.1498766376917167},{"date":"2016-03-08, 18:00:00","value":2.087047968003928},{"date":"2016-03-11, 18:00:00","value":1.7093979277233355},{"date":"2016-03-14, 18:00:00","value":1.3215990070136177},{"date":"2016-03-17, 18:00:00","value":1.2761765085532246},{"date":"2016-03-20, 18:00:00","value":1.1630453374407779},{"date":"2016-03-23, 18:00:00","value":0.8840040119754644},{"date":"2016-03-26, 18:00:00","value":1.2851724845980799},{"date":"2016-03-29, 18:00:00","value":0.9038178321922967},{"date":"2016-04-01, 18:00:00","value":1.0143623132593702},{"date":"2016-04-04, 18:00:00","value":0.8772888978875419},{"date":"2016-04-07, 18:00:00","value":0.7560006105328485},{"date":"2016-04-10, 18:00:00","value":0.6},{"date":"2016-04-13, 18:00:00","value":0.8452068578773617},{"date":"2016-04-16, 18:00:00","value":0.9813794449376114},{"date":"2016-04-19, 18:00:00","value":0.6},{"date":"2016-04-22, 18:00:00","value":0.8327762399807077},{"date":"2016-04-25, 18:00:00","value":1.0134667763183984},{"date":"2016-04-28, 18:00:00","value":1.2937261231142225},{"date":"2016-05-01, 18:00:00","value":1.4956430370549303},{"date":"2016-05-04, 18:00:00","value":1.8425368175920633},{"date":"2016-05-07, 18:00:00","value":2.1492494640090642},{"date":"2016-05-10, 18:00:00","value":1.8983774296433662},{"date":"2016-05-13, 18:00:00","value":2.3677282393368997},{"date":"2016-05-16, 18:00:00","value":2.142976936904211},{"date":"2016-05-19, 18:00:00","value":1.9721912757862068},{"date":"2016-05-22, 18:00:00","value":1.8840901682041737},{"date":"2016-05-25, 18:00:00","value":2.0248718140564526},{"date":"2016-05-28, 18:00:00","value":1.9453252473602776},{"date":"2016-05-31, 18:00:00","value":2.380568319397959},{"date":"2016-06-03, 18:00:00","value":2.240732440234828},{"date":"2016-06-06, 18:00:00","value":2.1040226175430883},{"date":"2016-06-09, 18:00:00","value":2.5703119848154055},{"date":"2016-06-12, 18:00:00","value":2.7259020479075877},{"date":"2016-06-15, 18:00:00","value":2.78220283310959},{"date":"2016-06-18, 18:00:00","value":2.4183110802736216},{"date":"2016-06-21, 18:00:00","value":2.1448084459886205},{"date":"2016-06-24, 18:00:00","value":1.7345470638337792},{"date":"2016-06-27, 18:00:00","value":1.4514704997913739},{"date":"2016-06-30, 18:00:00","value":1.518743575100793},{"date":"2016-07-03, 18:00:00","value":1.1801622783492827},{"date":"2016-07-06, 18:00:00","value":1.1874721671939028},{"date":"2016-07-09, 18:00:00","value":1.2733652937470616},{"date":"2016-07-12, 18:00:00","value":1.6901773488285876},{"date":"2016-07-15, 18:00:00","value":1.7665225245619265},{"date":"2016-07-18, 18:00:00","value":1.4684186076193144},{"date":"2016-07-21, 18:00:00","value":1.3414251579670193},{"date":"2016-07-24, 18:00:00","value":1.400005777778634},{"date":"2016-07-27, 18:00:00","value":1.6213883164012315},{"date":"2016-07-30, 18:00:00","value":1.5266872945372159},{"date":"2016-08-02, 18:00:00","value":1.833942786117568},{"date":"2016-08-05, 18:00:00","value":2.2633415131722088},{"date":"2016-08-08, 18:00:00","value":2.3993842893214206},{"date":"2016-08-11, 18:00:00","value":2.3283107338340585},{"date":"2016-08-14, 18:00:00","value":2.747952543697804},{"date":"2016-08-17, 18:00:00","value":2.3599762695679405},{"date":"2016-08-20, 18:00:00","value":2.839446128221105},{"date":"2016-08-23, 18:00:00","value":2.920406433679835},{"date":"2016-08-26, 18:00:00","value":3.1082280401513116},{"date":"2016-08-29, 18:00:00","value":3.3469677193335774},{"date":"2016-09-01, 18:00:00","value":3.0435034676701127},{"date":"2016-09-04, 18:00:00","value":3.506437307420211},{"date":"2016-09-07, 18:00:00","value":3.6234235990864816},{"date":"2016-09-10, 18:00:00","value":3.416304146070873},{"date":"2016-09-13, 18:00:00","value":3.0499714237079325},{"date":"2016-09-16, 18:00:00","value":3.1318097624805343},{"date":"2016-09-19, 18:00:00","value":3.0918658319826275},{"date":"2016-09-22, 18:00:00","value":3.529441268846952},{"date":"2016-09-25, 18:00:00","value":3.398039504633573},{"date":"2016-09-28, 18:00:00","value":3.3064436193432174},{"date":"2016-10-01, 18:00:00","value":3.359599223322161},{"date":"2016-10-04, 18:00:00","value":3.050599812830324},{"date":"2016-10-07, 18:00:00","value":3.518023897894052},{"date":"2016-10-10, 18:00:00","value":3.4586359082566025},{"date":"2016-10-13, 18:00:00","value":3.955836110250969},{"date":"2016-10-16, 18:00:00","value":3.747264227946973},{"date":"2016-10-19, 18:00:00","value":3.5187764890358313},{"date":"2016-10-22, 18:00:00","value":3.460308086421373},{"date":"2016-10-25, 18:00:00","value":3.309246424383129},{"date":"2016-10-28, 18:00:00","value":3.642429699627444},{"date":"2016-10-31, 18:00:00","value":3.410517275881114},{"date":"2016-11-03, 18:00:00","value":2.94783281351594},{"date":"2016-11-06, 18:00:00","value":2.611300862761042},{"date":"2016-11-09, 18:00:00","value":2.5573069294671305},{"date":"2016-11-12, 18:00:00","value":2.463818579952382},{"date":"2016-11-15, 18:00:00","value":1.9733102805767118},{"date":"2016-11-18, 18:00:00","value":2.0296537236742824},{"date":"2016-11-21, 18:00:00","value":2.202330423152021},{"date":"2016-11-24, 18:00:00","value":1.991221757305147},{"date":"2016-11-27, 18:00:00","value":2.1012956746295077},{"date":"2016-11-30, 18:00:00","value":2.162381583455075},{"date":"2016-12-03, 18:00:00","value":2.279620372133543},{"date":"2016-12-06, 18:00:00","value":2.6806928918882718},{"date":"2016-12-09, 18:00:00","value":2.3379215926640047},{"date":"2016-12-12, 18:00:00","value":2.122941709225388},{"date":"2016-12-15, 18:00:00","value":2.5533735146122805},{"date":"2016-12-18, 18:00:00","value":2.0768899162972936},{"date":"2016-12-21, 18:00:00","value":2.184953435038148},{"date":"2016-12-24, 18:00:00","value":2.159623222694462},{"date":"2016-12-27, 18:00:00","value":2.138397331932524},{"date":"2016-12-30, 18:00:00","value":1.98322648426333},{"date":"2017-01-02, 18:00:00","value":2.3632993035883745},{"date":"2017-01-05, 18:00:00","value":2.375030924369087},{"date":"2017-01-08, 18:00:00","value":2.842000247602138},{"date":"2017-01-11, 18:00:00","value":2.90225563876769},{"date":"2017-01-14, 18:00:00","value":2.8700322770610907},{"date":"2017-01-17, 18:00:00","value":2.7463361240211865},{"date":"2017-01-20, 18:00:00","value":2.5661795161518146},{"date":"2017-01-23, 18:00:00","value":2.418124388485172},{"date":"2017-01-26, 18:00:00","value":2.675909197833117},{"date":"2017-01-29, 18:00:00","value":2.280182318354388},{"date":"2017-02-01, 18:00:00","value":2.6542558881727234},{"date":"2017-02-04, 18:00:00","value":2.9289350730237325},{"date":"2017-02-07, 18:00:00","value":2.4912958132467455},{"date":"2017-02-10, 18:00:00","value":2.2737770067000893},{"date":"2017-02-13, 18:00:00","value":2.0058184867633626},{"date":"2017-02-16, 18:00:00","value":2.245885576539675},{"date":"2017-02-19, 18:00:00","value":2.4629670372840913},{"date":"2017-02-22, 18:00:00","value":1.9866024158282976},{"date":"2017-02-25, 18:00:00","value":2.290697146865295},{"date":"2017-02-28, 18:00:00","value":2.0752636092875534},{"date":"2017-03-03, 18:00:00","value":2.4726328195866434},{"date":"2017-03-06, 18:00:00","value":2.2760965546298806},{"date":"2017-03-09, 18:00:00","value":1.8354812752745966},{"date":"2017-03-12, 18:00:00","value":1.5009162859570595},{"date":"2017-03-15, 18:00:00","value":1.2988352247024073},{"date":"2017-03-18, 18:00:00","value":1.450365786702115},{"date":"2017-03-21, 18:00:00","value":1.4437118558633333},{"date":"2017-03-24, 18:00:00","value":1.0395569287919417},{"date":"2017-03-27, 18:00:00","value":0.7120749954204528},{"date":"2017-03-30, 18:00:00","value":0.8082785042484664},{"date":"2017-04-02, 18:00:00","value":0.7322892571855937},{"date":"2017-04-05, 18:00:00","value":0.6968343141034985},{"date":"2017-04-08, 18:00:00","value":0.6},{"date":"2017-04-11, 18:00:00","value":0.9709852523257751},{"date":"2017-04-14, 18:00:00","value":1.3144736714506184},{"date":"2017-04-17, 18:00:00","value":1.2958046012066535},{"date":"2017-04-20, 18:00:00","value":1.136718159109089},{"date":"2017-04-23, 18:00:00","value":1.0714386375335179},{"date":"2017-04-26, 18:00:00","value":1.3449789535660766},{"date":"2017-04-29, 18:00:00","value":1.1734925776089238},{"date":"2017-05-02, 18:00:00","value":1.2988094734690372},{"date":"2017-05-05, 18:00:00","value":1.5672732673194387},{"date":"2017-05-08, 18:00:00","value":1.7525883444951482},{"date":"2017-05-11, 18:00:00","value":1.5735863552388896},{"date":"2017-05-14, 18:00:00","value":2.013970779540361},{"date":"2017-05-17, 18:00:00","value":1.6986409040940442},{"date":"2017-05-20, 18:00:00","value":1.461503566543745},{"date":"2017-05-23, 18:00:00","value":1.7133090714164854}]
  }
}
const format = {
  year: 'll',
  month: 'MMM DD',
  week: 'MMM DD, h a',
  day: 'DD HH:mm:ss',
  hour: 'HH:mm:ss',
  all: 'L'
}
function addDateShow({data, ...other}){
  const _res = {data:{}, ...other}
  for (let periods in data) {
    _res.data[periods] = data[periods].map(({date, ...other}) => {
      const dataShow = moment(date, 'YYYY-MM-DD, HH:mm:ss').format(format[periods])
      return {
        date,
        dataShow,
        ...other
      }
    })
  }
  return _res
}

export default (hmq = addDateShow(hmqInit), /* { type, data }*/ ) => {
  return hmq;
};


// import {START, SUCCESS, REQUEST, FAIL, BLOCKCHAIN_EXCHANGE_RATES} from 'constants'
//
// import moment from 'moment';
//
// const hmqInit = {
//   loading: false,
//   loaded: true,
//   '1h': [],
//   '1d': [],
//   '1w': [],
//   '1m': [],
//   '1y': [],
//   'ALL': [],
// }
//
// const format = {
//   '1h': 'll',
//   '1d': 'MMM DD',
//   '1w': 'MMM DD, h a',
//   '1m': 'DD HH:mm:ss',
//   '1y': 'HH:mm:ss',
//   'ALL': 'L'
// }
//
// function addDateShow(rates){
//
//   return( rates.map( ({timestampIso, rate, period}) => {
//     return {
//       date: moment(timestampIso, 'YYYYMMDDTHHmmss[Z]').format('YYYY-MM-DD, HH:mm:ss'),
//       dateShow: moment(timestampIso, 'YYYYMMDDTHHmmss[Z]').format(format[period]),
//       valueShow: `$ ${Math.round(rate.usd * 1000) / 1000} (${Math.round(rate.usd * 1000000 / 1000000)} ETH)`,
//       value: Math.round(rate.eth * 1000000000)
//     }
//   }))
// }
//
// export default (hmq = hmqInit, { type, data }) => {
//
//   switch (type) {
//     case REQUEST + BLOCKCHAIN_EXCHANGE_RATES + START:
//       return {...hmq, loading: true}
//     case REQUEST + BLOCKCHAIN_EXCHANGE_RATES + SUCCESS:
//       const period = data.initdata
//       const entities = addDateShow(data.rates, period)
//       return {...hmq, loading: false, loaded: true, [period]:entities}
//     case REQUEST + BLOCKCHAIN_EXCHANGE_RATES + FAIL:
//       return {...hmq, loading: false}
//   }
//
//   return hmq;
// };

