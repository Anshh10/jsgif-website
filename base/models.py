from django.db import models

# Create your models here.
from django.db import models
from user.models import User


class Mangalyatra(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    title = models.CharField(max_length=50, null=False, blank=False)
    coverPage = models.ImageField(null=False, blank=False)
    page1 = models.ImageField(null=True, blank=True)
    page2 = models.ImageField(null=True, blank=True)
    page3 = models.ImageField(null=True, blank=True)
    page4 = models.ImageField(null=True, blank=True)
    page5 = models.ImageField(null=True, blank=True)
    page6 = models.ImageField(null=True, blank=True)
    page7 = models.ImageField(null=True, blank=True)
    page8 = models.ImageField(null=True, blank=True)
    page9 = models.ImageField(null=True, blank=True)
    page10 = models.ImageField(null=True, blank=True)
    page11 = models.ImageField(null=True, blank=True)
    page12 = models.ImageField(null=True, blank=True)
    page13 = models.ImageField(null=True, blank=True)
    page14 = models.ImageField(null=True, blank=True)
    page15 = models.ImageField(null=True, blank=True)
    page16 = models.ImageField(null=True, blank=True)
    page17 = models.ImageField(null=True, blank=True)
    page18 = models.ImageField(null=True, blank=True)
    page19 = models.ImageField(null=True, blank=True)
    page20 = models.ImageField(null=True, blank=True)
    page21 = models.ImageField(null=True, blank=True)
    page22 = models.ImageField(null=True, blank=True)
    page23 = models.ImageField(null=True, blank=True)
    page24 = models.ImageField(null=True, blank=True)
    page25 = models.ImageField(null=True, blank=True)
    page26 = models.ImageField(null=True, blank=True)
    page27 = models.ImageField(null=True, blank=True)
    page28 = models.ImageField(null=True, blank=True)
    page29 = models.ImageField(null=True, blank=True)
    page30 = models.ImageField(null=True, blank=True)
    page31 = models.ImageField(null=True, blank=True)
    page32 = models.ImageField(null=True, blank=True)
    page33 = models.ImageField(null=True, blank=True)
    page34 = models.ImageField(null=True, blank=True)
    page35 = models.ImageField(null=True, blank=True)
    page36 = models.ImageField(null=True, blank=True)
    page37 = models.ImageField(null=True, blank=True)
    page38 = models.ImageField(null=True, blank=True)
    page39 = models.ImageField(null=True, blank=True)
    page40 = models.ImageField(null=True, blank=True)
    page41 = models.ImageField(null=True, blank=True)
    page42 = models.ImageField(null=True, blank=True)
    page43 = models.ImageField(null=True, blank=True)
    page44 = models.ImageField(null=True, blank=True)
    page45 = models.ImageField(null=True, blank=True)
    page46 = models.ImageField(null=True, blank=True)
    page47 = models.ImageField(null=True, blank=True)
    page48 = models.ImageField(null=True, blank=True)
    page49 = models.ImageField(null=True, blank=True)
    page50 = models.ImageField(null=True, blank=True)
    page51 = models.ImageField(null=True, blank=True)
    page52 = models.ImageField(null=True, blank=True)
    page53 = models.ImageField(null=True, blank=True)
    page54 = models.ImageField(null=True, blank=True)
    page55 = models.ImageField(null=True, blank=True)
    page56 = models.ImageField(null=True, blank=True)
    page57 = models.ImageField(null=True, blank=True)
    page58 = models.ImageField(null=True, blank=True)
    page59 = models.ImageField(null=True, blank=True)
    page60 = models.ImageField(null=True, blank=True)
    page61 = models.ImageField(null=True, blank=True)
    page62 = models.ImageField(null=True, blank=True)
    page63 = models.ImageField(null=True, blank=True)
    page64 = models.ImageField(null=True, blank=True)
    page65 = models.ImageField(null=True, blank=True)
    page66 = models.ImageField(null=True, blank=True)
    page67 = models.ImageField(null=True, blank=True)
    page68 = models.ImageField(null=True, blank=True)
    page69 = models.ImageField(null=True, blank=True)
    page70 = models.ImageField(null=True, blank=True)
    page71 = models.ImageField(null=True, blank=True)
    page72 = models.ImageField(null=True, blank=True)
    page73 = models.ImageField(null=True, blank=True)
    page74 = models.ImageField(null=True, blank=True)
    page75 = models.ImageField(null=True, blank=True)
    page76 = models.ImageField(null=True, blank=True)
    page77 = models.ImageField(null=True, blank=True)
    page78 = models.ImageField(null=True, blank=True)
    page79 = models.ImageField(null=True, blank=True)
    page80 = models.ImageField(null=True, blank=True)
    page81 = models.ImageField(null=True, blank=True)
    page82 = models.ImageField(null=True, blank=True)
    page83 = models.ImageField(null=True, blank=True)
    page84 = models.ImageField(null=True, blank=True)
    page85 = models.ImageField(null=True, blank=True)
    page86 = models.ImageField(null=True, blank=True)
    page87 = models.ImageField(null=True, blank=True)
    page88 = models.ImageField(null=True, blank=True)
    page89 = models.ImageField(null=True, blank=True)
    page90 = models.ImageField(null=True, blank=True)
    page91 = models.ImageField(null=True, blank=True)
    page92 = models.ImageField(null=True, blank=True)
    page93 = models.ImageField(null=True, blank=True)
    page94 = models.ImageField(null=True, blank=True)
    page95 = models.ImageField(null=True, blank=True)
    page96 = models.ImageField(null=True, blank=True)
    page97 = models.ImageField(null=True, blank=True)
    page98 = models.ImageField(null=True, blank=True)
    page99 = models.ImageField(null=True, blank=True)
    page100 = models.ImageField(null=True, blank=True)
    page101 = models.ImageField(null=True, blank=True)
    page102 = models.ImageField(null=True, blank=True)
    page103 = models.ImageField(null=True, blank=True)
    page104 = models.ImageField(null=True, blank=True)
    page105 = models.ImageField(null=True, blank=True)
    page106 = models.ImageField(null=True, blank=True)
    page107 = models.ImageField(null=True, blank=True)
    page108 = models.ImageField(null=True, blank=True)
    page109 = models.ImageField(null=True, blank=True)
    page110 = models.ImageField(null=True, blank=True)
    lastPage = models.ImageField(null=False, blank=False)

    def __str__(self):
        return self.title


# Event APIs

class FedEvent(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    eTitle = models.CharField(max_length=50, null=True, blank=True)
    eDescription = models.CharField(max_length=200, null=True, blank=True)
    eThumbnail = models.ImageField(null=False, blank=False)
    eStartDate = models.CharField(max_length=50, null=True, blank=True)
    eStartTime = models.CharField(max_length=50, null=True, blank=True)
    eEndDate = models.CharField(max_length=50, null=True, blank=True)
    eEndTime = models.CharField(max_length=50, null=True, blank=True)
    eCity = models.CharField(max_length=50, null=True, blank=True)
    ePhoto1 = models.ImageField(null=True, blank=True)
    ePhoto2 = models.ImageField(null=True, blank=True)
    ePhoto3 = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.eTitle


class RegEvent(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    region = models.CharField(max_length=50)
    eTitle = models.CharField(max_length=50, null=True, blank=True)
    eDescription = models.CharField(max_length=200, null=True, blank=True)
    eThumbnail = models.ImageField(null=False, blank=False)
    eStartDate = models.CharField(max_length=50, null=True, blank=True)
    eStartTime = models.CharField(max_length=50, null=True, blank=True)
    eEndDate = models.CharField(max_length=50, null=True, blank=True)
    eEndTime = models.CharField(max_length=50, null=True, blank=True)
    eCity = models.CharField(max_length=50, null=True, blank=True)
    ePhoto1 = models.ImageField(null=True, blank=True)
    ePhoto2 = models.ImageField(null=True, blank=True)
    ePhoto3 = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.region + " " + self.eTitle


class GrpEvent(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    region = models.CharField(max_length=50)
    group = models.CharField(max_length=50)
    eTitle = models.CharField(max_length=50, null=True, blank=True)
    eDescription = models.CharField(max_length=200, null=True, blank=True)
    eThumbnail = models.ImageField(null=False, blank=False)
    eStartDate = models.CharField(max_length=50, null=True, blank=True)
    eStartTime = models.CharField(max_length=50, null=True, blank=True)
    eEndDate = models.CharField(max_length=50, null=True, blank=True)
    eEndTime = models.CharField(max_length=50, null=True, blank=True)
    eCity = models.CharField(max_length=50, null=True, blank=True)
    ePhoto1 = models.ImageField(null=True, blank=True)
    ePhoto2 = models.ImageField(null=True, blank=True)
    ePhoto3 = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.group + " " + self.eTitle

# Federation Form models


class ContactUsResponse(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=20, blank=True, null=True)
    contactNum = models.CharField(max_length=15, blank=True, null=True)
    city = models.CharField(max_length=20, blank=True, null=True)
    grp = models.CharField(max_length=20, blank=True, null=True)
    region = models.CharField(max_length=20, blank=True, null=True)
    message = models.CharField(max_length=200, blank=True, null=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class FedIDMeetResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    nDate = models.CharField(max_length=50, null=True, blank=True)
    mDay = models.CharField(max_length=200, null=True, blank=True)
    mDate = models.CharField(max_length=200, null=True, blank=True)
    mTime = models.CharField(max_length=50, null=True, blank=True)
    mAddress = models.CharField(max_length=1000, null=True, blank=True)
    mCity = models.CharField(max_length=30, null=True, blank=True)
    mState = models.CharField(max_length=30, null=True, blank=True)
    mZip = models.IntegerField(null=True, blank=True)
    secretaryGen = models.CharField(max_length=100, null=True, blank=True)
    secretary = models.CharField(max_length=100, null=True, blank=True)
    jtSecretary = models.CharField(max_length=100, null=True, blank=True)
    agendaPoint = models.CharField(max_length=700, null=True, blank=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.nDate


class FedOBMeetResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    nDate = models.CharField(max_length=50, null=True, blank=True)
    mDay = models.CharField(max_length=200, null=True, blank=True)
    mDate = models.CharField(max_length=200, null=True, blank=True)
    mTime = models.CharField(max_length=50, null=True, blank=True)
    mAddress = models.CharField(max_length=1000, null=True, blank=True)
    mCity = models.CharField(max_length=30, null=True, blank=True)
    mState = models.CharField(max_length=30, null=True, blank=True)
    mZip = models.IntegerField(null=True, blank=True)
    secretaryGen = models.CharField(max_length=100, null=True, blank=True)
    secretary = models.CharField(max_length=100, null=True, blank=True)
    jtSecretary = models.CharField(max_length=100, null=True, blank=True)
    agendaPoint = models.CharField(max_length=700, null=True, blank=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.nDate


class FedAgmResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    nDate = models.CharField(max_length=50, null=True, blank=True)
    mDay = models.CharField(max_length=50, null=True, blank=True)
    mDate = models.CharField(max_length=50, null=True, blank=True)
    mTime = models.CharField(max_length=50, null=True, blank=True)
    mAddress = models.CharField(max_length=1000, null=True, blank=True)
    mCity = models.CharField(max_length=30, null=True, blank=True)
    mState = models.CharField(max_length=30, null=True, blank=True)
    mZip = models.IntegerField(null=True, blank=True)
    mYear = models.CharField(max_length=100, null=True, blank=True)
    auditorFYear = models.CharField(max_length=100, null=True, blank=True)
    fedSecretary = models.CharField(max_length=100, null=True, blank=True)
    agendaPoint = models.CharField(max_length=700, null=True, blank=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.nDate


class FedCcmResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    nDate = models.CharField(max_length=50, null=True, blank=True)
    mYear = models.CharField(max_length=50, null=True, blank=True)
    mDay = models.CharField(max_length=50, null=True, blank=True)
    mDate = models.CharField(max_length=50, null=True, blank=True)
    mTime = models.CharField(max_length=50, null=True, blank=True)
    mAddress = models.CharField(max_length=1000, null=True, blank=True)
    mCity = models.CharField(max_length=50, null=True, blank=True)
    mState = models.CharField(max_length=50, null=True, blank=True)
    mZip = models.CharField(max_length=50, null=True, blank=True)
    presName = models.CharField(max_length=50, null=True, blank=True)
    presyear = models.CharField(max_length=50, null=True, blank=True)
    lastyearMinutesFYear = models.CharField(
        max_length=50, null=True, blank=True)
    secyear = models.CharField(max_length=50, null=True, blank=True)
    unAuditedAccFYear = models.CharField(max_length=50, null=True, blank=True)
    grpContibutionFYear = models.CharField(
        max_length=50, null=True, blank=True)
    fedSecretaryGen = models.CharField(max_length=50, null=True, blank=True)
    fedSecretary = models.CharField(max_length=50, null=True, blank=True)
    fedJtSecretary = models.CharField(max_length=50, null=True, blank=True)
    agendaPoint = models.CharField(max_length=700, null=True, blank=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.nDate


# Region Form models
class RegionAgmResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    rName = models.CharField(max_length=100, null=True, blank=False)
    nDate = models.CharField(max_length=50, null=True, blank=True)
    mDay = models.CharField(max_length=200, null=True, blank=True)
    mDate = models.CharField(max_length=200, null=True, blank=True)
    mTime = models.CharField(max_length=50, null=True, blank=True)
    mAddress = models.CharField(max_length=1000, null=True, blank=True)
    mCity = models.CharField(max_length=30, null=True, blank=True)
    mState = models.CharField(max_length=30, null=True, blank=True)
    mZip = models.IntegerField(null=True, blank=True)
    mYear = models.CharField(max_length=100, null=True, blank=True)
    auditorFYear = models.CharField(max_length=100, null=True, blank=True)
    rSecretary = models.CharField(max_length=100, null=True, blank=True)
    agendaPoint = models.CharField(max_length=700, null=True, blank=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return str(self.rName)


class RegionCommitteeMeetResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    rName = models.CharField(max_length=100, null=True, blank=False)
    nDate = models.DateField(max_length=50, null=True, blank=True)
    mDay = models.CharField(max_length=200, null=True, blank=True)
    mDate = models.CharField(max_length=200, null=True, blank=True)
    mTime = models.CharField(max_length=50, null=True, blank=True)
    mVenue = models.CharField(max_length=1000, null=True, blank=True)
    budgetYear = models.CharField(max_length=30, null=True, blank=True)
    reporterName = models.CharField(max_length=30, null=True, blank=True)
    agendaPoint = models.CharField(max_length=1000, null=True, blank=True)
    rSecretary = models.CharField(max_length=700, null=True, blank=True)
    rJtSecretary1 = models.CharField(max_length=100, null=True, blank=True)
    rJtSecretary2 = models.CharField(max_length=100, null=True, blank=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.rName


class RegionOBMeetResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    rName = models.CharField(max_length=100, null=True, blank=False)
    nDate = models.DateField(max_length=50, null=True, blank=True)
    mDay = models.CharField(max_length=200, null=True, blank=True)
    mDate = models.CharField(max_length=200, null=True, blank=True)
    mTime = models.CharField(max_length=50, null=True, blank=True)
    mVenue = models.CharField(max_length=1000, null=True, blank=True)
    budgetYear = models.CharField(max_length=30, null=True, blank=True)
    reporterName = models.CharField(max_length=30, null=True, blank=True)
    agendaPoint = models.CharField(max_length=1000, null=True, blank=True)
    rSecretary = models.CharField(max_length=700, null=True, blank=True)
    rJtSecretary1 = models.CharField(max_length=100, null=True, blank=True)
    rJtSecretary2 = models.CharField(max_length=100, null=True, blank=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.rName


# Sangini Forms
class SanigniCommitteeMeetResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    nDate = models.CharField(max_length=50, null=True, blank=True)
    mDay = models.CharField(max_length=200, null=True, blank=True)
    mDate = models.CharField(max_length=200, null=True, blank=True)
    mTime = models.CharField(max_length=50, null=True, blank=True)
    mAddress = models.CharField(max_length=1000, null=True, blank=True)
    mCity = models.CharField(max_length=30, null=True, blank=True)
    mState = models.CharField(max_length=30, null=True, blank=True)
    mZip = models.IntegerField(null=True, blank=True)
    grpSecretary = models.CharField(max_length=100, null=True, blank=True)
    grpJtSecretary1 = models.CharField(max_length=100, null=True, blank=True)
    grpJtSecretary2 = models.CharField(max_length=100, null=True, blank=True)
    agendaPoint = models.CharField(max_length=700, null=True, blank=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.nDate


class SanginiForumRegistrationResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    sangName = models.CharField(max_length=50, null=True, blank=True)
    formDate = models.CharField(max_length=200, null=True, blank=True)
    parentgName = models.CharField(max_length=200, null=True, blank=True)
    cordName1 = models.CharField(max_length=50, null=True, blank=True)
    cordpost1 = models.CharField(max_length=50, null=True, blank=True)
    cordName2 = models.CharField(max_length=50, null=True, blank=True)
    cordpost2 = models.CharField(max_length=50, null=True, blank=True)
    formationDate = models.CharField(max_length=1000, null=True, blank=True)
    presName = models.CharField(max_length=30, null=True, blank=True)
    vPresName = models.CharField(max_length=30, null=True, blank=True)
    secName = models.CharField(max_length=30, null=True, blank=True)
    jtSecName = models.CharField(max_length=100, null=True, blank=True)
    tresName = models.CharField(max_length=100, null=True, blank=True)
    commName1 = models.CharField(max_length=100, null=True, blank=True)
    commName2 = models.CharField(max_length=100, null=True, blank=True)
    commName3 = models.CharField(max_length=100, null=True, blank=True)
    commName4 = models.CharField(max_length=100, null=True, blank=True)
    commName5 = models.CharField(max_length=100, null=True, blank=True)
    ddNumber = models.CharField(max_length=20, null=True, blank=True)
    bankName = models.CharField(max_length=50, null=True, blank=True)
    ddDate = models.CharField(max_length=50, null=True, blank=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.sangName


# Group Form models
class GroupAddEvent(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    grpName = models.CharField(max_length=50, null=True, blank=True)
    eTitle = models.CharField(max_length=50, null=True, blank=True)
    eDescription = models.CharField(max_length=200, null=True, blank=True)
    eThumbnail = models.ImageField(null=True, blank=True)
    eStartDate = models.CharField(max_length=50, null=True, blank=True)
    eStartTime = models.CharField(max_length=50, null=True, blank=True)
    eEndDate = models.CharField(max_length=50, null=True, blank=True)
    eEndTime = models.CharField(max_length=50, null=True, blank=True)
    eCity = models.CharField(max_length=50, null=True, blank=True)
    ePhoto1 = models.ImageField(null=True, blank=True)
    ePhoto2 = models.ImageField(null=True, blank=True)
    ePhoto3 = models.ImageField(null=True, blank=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.grpName


class GroupAgmResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    gName = models.CharField(max_length=100, null=True, blank=False)
    nDate = models.CharField(max_length=50, null=True, blank=True)
    mDay = models.CharField(max_length=200, null=True, blank=True)
    mDate = models.CharField(max_length=200, null=True, blank=True)
    mTime = models.CharField(max_length=50, null=True, blank=True)
    mAddress = models.CharField(max_length=1000, null=True, blank=True)
    mCity = models.CharField(max_length=30, null=True, blank=True)
    mState = models.CharField(max_length=30, null=True, blank=True)
    mZip = models.IntegerField(null=True, blank=True)
    mYear = models.CharField(max_length=100, null=True, blank=True)
    secReportYear = models.CharField(max_length=100, null=True, blank=True)
    auditorFYear = models.CharField(max_length=100, null=True, blank=True)
    grpSecretary = models.CharField(max_length=100, null=True, blank=True)
    agendaPoint = models.CharField(max_length=700, null=True, blank=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.gName


class GroupCommitteeMeetResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    gName = models.CharField(max_length=100, null=True, blank=False)
    nDate = models.CharField(max_length=50, null=True, blank=True)
    mDay = models.CharField(max_length=200, null=True, blank=True)
    mDate = models.CharField(max_length=200, null=True, blank=True)
    mTime = models.CharField(max_length=50, null=True, blank=True)
    mAddress = models.CharField(max_length=1000, null=True, blank=True)
    mCity = models.CharField(max_length=30, null=True, blank=True)
    mState = models.CharField(max_length=30, null=True, blank=True)
    mZip = models.IntegerField(null=True, blank=True)
    grpSecretary = models.CharField(max_length=100, null=True, blank=True)
    grpJtSecretary = models.CharField(max_length=100, null=True, blank=True)
    agendaPoint = models.CharField(max_length=700, null=True, blank=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.gName


class GroupEGMResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    gName = models.CharField(max_length=100, null=True, blank=False)
    nDate = models.CharField(max_length=50, null=True, blank=True)
    mDay = models.CharField(max_length=200, null=True, blank=True)
    mDate = models.CharField(max_length=200, null=True, blank=True)
    mTime = models.CharField(max_length=50, null=True, blank=True)
    mAddress = models.CharField(max_length=1000, null=True, blank=True)
    mCity = models.CharField(max_length=30, null=True, blank=True)
    mState = models.CharField(max_length=30, null=True, blank=True)
    mZip = models.IntegerField(null=True, blank=True)
    electionForYear = models.CharField(max_length=100, null=True, blank=True)
    grpSecretary = models.CharField(max_length=100, null=True, blank=True)
    agendaPoint = models.CharField(max_length=700, null=True, blank=True)
    electionSDay = models.CharField(max_length=200, null=True, blank=True)
    electionSDate = models.CharField(max_length=200, null=True, blank=True)
    electionSTime = models.CharField(max_length=50, null=True, blank=True)
    electionWDay = models.CharField(max_length=200, null=True, blank=True)
    electionWDate = models.CharField(max_length=200, null=True, blank=True)
    electionWTime = models.CharField(max_length=50, null=True, blank=True)
    contestantsfeesFYear = models.CharField(
        max_length=50, null=True, blank=True)
    proposerfeesFYear = models.CharField(max_length=50, null=True, blank=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.gName


class GroupForumRegistrationResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    grpName = models.CharField(max_length=50, null=True, blank=True)
    formDate = models.CharField(max_length=200, null=True, blank=True)
    parentgName = models.CharField(max_length=200, null=True, blank=True)
    cordName1 = models.CharField(max_length=50, null=True, blank=True)
    cordpost1 = models.CharField(max_length=50, null=True, blank=True)
    cordName2 = models.CharField(max_length=50, null=True, blank=True)
    cordpost2 = models.CharField(max_length=50, null=True, blank=True)
    formationDate = models.CharField(max_length=1000, null=True, blank=True)
    presName = models.CharField(max_length=30, null=True, blank=True)
    vPresName = models.CharField(max_length=30, null=True, blank=True)
    secName = models.CharField(max_length=30, null=True, blank=True)
    jtSecName = models.CharField(max_length=100, null=True, blank=True)
    tresName = models.CharField(max_length=100, null=True, blank=True)
    commName1 = models.CharField(max_length=100, null=True, blank=True)
    commName2 = models.CharField(max_length=100, null=True, blank=True)
    commName3 = models.CharField(max_length=100, null=True, blank=True)
    commName4 = models.CharField(max_length=100, null=True, blank=True)
    commName5 = models.CharField(max_length=100, null=True, blank=True)
    ddNumber = models.CharField(max_length=20, null=True, blank=True)
    bankName = models.CharField(max_length=50, null=True, blank=True)
    ddDate = models.CharField(max_length=50, null=True, blank=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.grpName


class GroupFormAResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    regName = models.CharField(max_length=20, blank=True, null=True)
    grpName = models.CharField(max_length=20, blank=True, null=True)
    grpNumber = models.CharField(max_length=20, blank=True, null=True)
    grpAddress = models.CharField(max_length=20, blank=True, null=True)
    grpPresidentNum = models.CharField(max_length=20, blank=True, null=True)
    grpSecretaryNum = models.CharField(max_length=20, blank=True, null=True)
    grpTreasurerNum = models.CharField(max_length=20, blank=True, null=True)
    CoupleMembers = models.CharField(max_length=20, blank=True, null=True)
    SingleMembers = models.CharField(max_length=20, blank=True, null=True)
    amtToPay = models.CharField(max_length=20, blank=True, null=True)
    oldDuepayable = models.CharField(max_length=20, blank=True, null=True)
    oldDueRedeemable = models.CharField(max_length=20, blank=True, null=True)
    totalAmtPayable = models.CharField(max_length=20, blank=True, null=True)
    amtPaid = models.CharField(max_length=20, blank=True, null=True)
    newDuepayable = models.CharField(max_length=20, blank=True, null=True)
    newDueRedeemable = models.CharField(max_length=20, blank=True, null=True)
    draft_chequeNum = models.CharField(max_length=20, blank=True, null=True)
    chequedate = models.CharField(max_length=20, blank=True, null=True)
    drawnOn = models.CharField(max_length=20, blank=True, null=True)
    branchName = models.CharField(max_length=20, blank=True, null=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.grpName


class GroupFormBResponse(models.Model):
    regName = models.CharField(max_length=20, blank=True, null=True)
    grpName = models.CharField(max_length=20, blank=True, null=True)
    grpNumber = models.CharField(max_length=20, blank=True, null=True)
    grpAddress = models.CharField(max_length=100, blank=True, null=True)
    stdCode = models.CharField(max_length=20, blank=True, null=True)
    regionName = models.CharField(max_length=20, blank=True, null=True)
    dateOfInaugration = models.CharField(max_length=20, blank=True, null=True)
    dateOfCharter = models.CharField(max_length=20, blank=True, null=True)
    sponsorGrpName = models.CharField(max_length=20, blank=True, null=True)
    grpPhone = models.CharField(max_length=20, blank=True, null=True)
    grpMobile = models.CharField(max_length=20, blank=True, null=True)
    grpEmail = models.CharField(max_length=20, blank=True, null=True)
    electionMeetingDate = models.CharField(
        max_length=20, blank=True, null=True)
    electedOnDate = models.CharField(max_length=20, blank=True, null=True)
    presName = models.CharField(max_length=20, blank=True, null=True)
    presPhoto = models.ImageField(blank=True, null=True)
    presaddress = models.CharField(max_length=100, blank=True, null=True)
    presPinCode = models.CharField(max_length=20, blank=True, null=True)
    presOffLandLine = models.CharField(max_length=20, blank=True, null=True)
    presResLandLine = models.CharField(max_length=20, blank=True, null=True)
    presMobileNumber = models.CharField(max_length=20, blank=True, null=True)
    presWhatsappNumber = models.CharField(max_length=20, blank=True, null=True)
    presEmail = models.CharField(max_length=20, blank=True, null=True)
    presOccupation = models.CharField(max_length=20, blank=True, null=True)
    presSpouseName = models.CharField(max_length=20, blank=True, null=True)
    presBirthDay = models.CharField(max_length=20, blank=True, null=True)
    presSpouseBirthDay = models.CharField(max_length=20, blank=True, null=True)
    presMarraigeDate = models.CharField(max_length=20, blank=True, null=True)
    immFormerPresName = models.CharField(max_length=20, blank=True, null=True)
    immFormerPresPhoto = models.ImageField(blank=True, null=True)
    immFormerPresaddress = models.CharField(
        max_length=100, blank=True, null=True)
    immFormerPresPinCode = models.CharField(
        max_length=20, blank=True, null=True)
    immFormerPresOffLandLine = models.CharField(
        max_length=20, blank=True, null=True)
    immFormerPresResLandLine = models.CharField(
        max_length=20, blank=True, null=True)
    immFormerPresMobileNumber = models.CharField(
        max_length=20, blank=True, null=True)
    immFormerPresWhatsappNumber = models.CharField(
        max_length=20, blank=True, null=True)
    immFormerPresEmail = models.CharField(max_length=20, blank=True, null=True)
    immFormerPresOccupation = models.CharField(
        max_length=20, blank=True, null=True)
    immFormerPresSpouseName = models.CharField(
        max_length=20, blank=True, null=True)
    immFormerPresBirthDay = models.CharField(
        max_length=20, blank=True, null=True)
    immFormerPresSpouseBirthDay = models.CharField(
        max_length=20, blank=True, null=True)
    immFormerPresMarraigeDate = models.CharField(
        max_length=20, blank=True, null=True)
    founderPresName = models.CharField(max_length=20, blank=True, null=True)
    founderPresPhoto = models.ImageField(blank=True, null=True)
    founderPresaddress = models.CharField(
        max_length=100, blank=True, null=True)
    founderPresPinCode = models.CharField(max_length=20, blank=True, null=True)
    founderPresOffLandLine = models.CharField(
        max_length=20, blank=True, null=True)
    founderPresResLandLine = models.CharField(
        max_length=20, blank=True, null=True)
    founderPresMobileNumber = models.CharField(
        max_length=20, blank=True, null=True)
    founderPresWhatsappNumber = models.CharField(
        max_length=20, blank=True, null=True)
    founderPresEmail = models.CharField(max_length=20, blank=True, null=True)
    founderPresOccupation = models.CharField(
        max_length=20, blank=True, null=True)
    founderPresSpouseName = models.CharField(
        max_length=20, blank=True, null=True)
    founderPresBirthDay = models.CharField(
        max_length=20, blank=True, null=True)
    founderPresSpouseBirthDay = models.CharField(
        max_length=20, blank=True, null=True)
    founderPresMarraigeDate = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres1Name = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres1Photo = models.ImageField(blank=True, null=True)
    nominatedFormerPres1address = models.CharField(
        max_length=100, blank=True, null=True)
    nominatedFormerPres1PinCode = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres1OffLandLine = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres1ResLandLine = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres1MobileNumber = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres1WhatsappNumber = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres1Email = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres1Occupation = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres1SpouseName = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres1BirthDay = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres1SpouseBirthDay = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres1MarraigeDate = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres2Name = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres2Photo = models.ImageField(blank=True, null=True)
    nominatedFormerPres2address = models.CharField(
        max_length=100, blank=True, null=True)
    nominatedFormerPres2PinCode = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres2OffLandLine = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres2ResLandLine = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres2MobileNumber = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres2WhatsappNumber = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres2Email = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres2Occupation = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres2SpouseName = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres2BirthDay = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres2SpouseBirthDay = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres2MarraigeDate = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres3Name = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres3Photo = models.ImageField(blank=True, null=True)
    nominatedFormerPres3address = models.CharField(
        max_length=100, blank=True, null=True)
    nominatedFormerPres3PinCode = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres3OffLandLine = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres3ResLandLine = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres3MobileNumber = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres3WhatsappNumber = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres3Email = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres3Occupation = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres3SpouseName = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres3BirthDay = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres3SpouseBirthDay = models.CharField(
        max_length=20, blank=True, null=True)
    nominatedFormerPres3MarraigeDate = models.CharField(
        max_length=20, blank=True, null=True)
    vPresName = models.CharField(max_length=20, blank=True, null=True)
    vPresPhoto = models.ImageField(blank=True, null=True)
    vPresaddress = models.CharField(max_length=100, blank=True, null=True)
    vPresPinCode = models.CharField(max_length=20, blank=True, null=True)
    vPresOffLandLine = models.CharField(max_length=20, blank=True, null=True)
    vPresResLandLine = models.CharField(max_length=20, blank=True, null=True)
    vPresMobileNumber = models.CharField(max_length=20, blank=True, null=True)
    vPresWhatsappNumber = models.CharField(
        max_length=20, blank=True, null=True)
    vPresEmail = models.CharField(max_length=20, blank=True, null=True)
    vPresOccupation = models.CharField(max_length=20, blank=True, null=True)
    vPresSpouseName = models.CharField(max_length=20, blank=True, null=True)
    vPresBirthDay = models.CharField(max_length=20, blank=True, null=True)
    vPresSpouseBirthDay = models.CharField(
        max_length=20, blank=True, null=True)
    vPresMarraigeDate = models.CharField(max_length=20, blank=True, null=True)
    secName = models.CharField(max_length=20, blank=True, null=True)
    secPhoto = models.ImageField(blank=True, null=True)
    secaddress = models.CharField(max_length=100, blank=True, null=True)
    secPinCode = models.CharField(max_length=20, blank=True, null=True)
    secOffLandLine = models.CharField(max_length=20, blank=True, null=True)
    secResLandLine = models.CharField(max_length=20, blank=True, null=True)
    secMobileNumber = models.CharField(max_length=20, blank=True, null=True)
    secWhatsappNumber = models.CharField(max_length=20, blank=True, null=True)
    secEmail = models.CharField(max_length=20, blank=True, null=True)
    secOccupation = models.CharField(max_length=20, blank=True, null=True)
    secSpouseName = models.CharField(max_length=20, blank=True, null=True)
    secBirthDay = models.CharField(max_length=20, blank=True, null=True)
    secSpouseBirthDay = models.CharField(max_length=20, blank=True, null=True)
    secMarraigeDate = models.CharField(max_length=20, blank=True, null=True)
    jtSecName = models.CharField(max_length=20, blank=True, null=True)
    jtSecPhoto = models.ImageField(blank=True, null=True)
    jtSecaddress = models.CharField(max_length=100, blank=True, null=True)
    jtSecPinCode = models.CharField(max_length=20, blank=True, null=True)
    jtSecOffLandLine = models.CharField(max_length=20, blank=True, null=True)
    jtSecResLandLine = models.CharField(max_length=20, blank=True, null=True)
    jtSecMobileNumber = models.CharField(max_length=20, blank=True, null=True)
    jtSecWhatsappNumber = models.CharField(
        max_length=20, blank=True, null=True)
    jtSecEmail = models.CharField(max_length=20, blank=True, null=True)
    jtSecOccupation = models.CharField(max_length=20, blank=True, null=True)
    jtSecSpouseName = models.CharField(max_length=20, blank=True, null=True)
    jtSecBirthDay = models.CharField(max_length=20, blank=True, null=True)
    jtSecSpouseBirthDay = models.CharField(
        max_length=20, blank=True, null=True)
    jtSecMarraigeDate = models.CharField(max_length=20, blank=True, null=True)
    treasurerName = models.CharField(max_length=20, blank=True, null=True)
    treasurerPhoto = models.ImageField(blank=True, null=True)
    treasureraddress = models.CharField(max_length=100, blank=True, null=True)
    treasurerPinCode = models.CharField(max_length=20, blank=True, null=True)
    treasurerOffLandLine = models.CharField(
        max_length=20, blank=True, null=True)
    treasurerResLandLine = models.CharField(
        max_length=20, blank=True, null=True)
    treasurerMobileNumber = models.CharField(
        max_length=20, blank=True, null=True)
    treasurerWhatsappNumber = models.CharField(
        max_length=20, blank=True, null=True)
    treasurerEmail = models.CharField(max_length=20, blank=True, null=True)
    treasurerOccupation = models.CharField(
        max_length=20, blank=True, null=True)
    treasurerSpouseName = models.CharField(
        max_length=20, blank=True, null=True)
    treasurerBirthDay = models.CharField(max_length=20, blank=True, null=True)
    treasurerSpouseBirthDay = models.CharField(
        max_length=20, blank=True, null=True)
    treasurerMarraigeDate = models.CharField(
        max_length=20, blank=True, null=True)
    com1Name = models.CharField(max_length=20, blank=True, null=True)
    com1PinCode = models.CharField(max_length=20, blank=True, null=True)
    com1address = models.CharField(max_length=100, blank=True, null=True)
    com1OffLandLine = models.CharField(max_length=20, blank=True, null=True)
    com1ResLandLine = models.CharField(max_length=20, blank=True, null=True)
    com1MobileNumber = models.CharField(max_length=20, blank=True, null=True)
    com1Email = models.CharField(max_length=20, blank=True, null=True)
    com2Name = models.CharField(max_length=20, blank=True, null=True)
    com2PinCode = models.CharField(max_length=20, blank=True, null=True)
    com2address = models.CharField(max_length=100, blank=True, null=True)
    com2OffLandLine = models.CharField(max_length=20, blank=True, null=True)
    com2ResLandLine = models.CharField(max_length=20, blank=True, null=True)
    com2MobileNumber = models.CharField(max_length=20, blank=True, null=True)
    com2Email = models.CharField(max_length=20, blank=True, null=True)
    com3Name = models.CharField(max_length=20, blank=True, null=True)
    com3PinCode = models.CharField(max_length=20, blank=True, null=True)
    com3address = models.CharField(max_length=100, blank=True, null=True)
    com3OffLandLine = models.CharField(max_length=20, blank=True, null=True)
    com3ResLandLine = models.CharField(max_length=20, blank=True, null=True)
    com3MobileNumber = models.CharField(max_length=20, blank=True, null=True)
    com3Email = models.CharField(max_length=20, blank=True, null=True)
    com4Name = models.CharField(max_length=20, blank=True, null=True)
    com4PinCode = models.CharField(max_length=20, blank=True, null=True)
    com4address = models.CharField(max_length=100, blank=True, null=True)
    com4OffLandLine = models.CharField(max_length=20, blank=True, null=True)
    com4ResLandLine = models.CharField(max_length=20, blank=True, null=True)
    com4MobileNumber = models.CharField(max_length=20, blank=True, null=True)
    com4Email = models.CharField(max_length=20, blank=True, null=True)
    com5Name = models.CharField(max_length=20, blank=True, null=True)
    com5PinCode = models.CharField(max_length=20, blank=True, null=True)
    com5address = models.CharField(max_length=100, blank=True, null=True)
    com5OffLandLine = models.CharField(max_length=20, blank=True, null=True)
    com5ResLandLine = models.CharField(max_length=20, blank=True, null=True)
    com5MobileNumber = models.CharField(max_length=20, blank=True, null=True)
    com5Email = models.CharField(max_length=20, blank=True, null=True)
    com6Name = models.CharField(max_length=20, blank=True, null=True)
    com6PinCode = models.CharField(max_length=20, blank=True, null=True)
    com6address = models.CharField(max_length=100, blank=True, null=True)
    com6OffLandLine = models.CharField(max_length=20, blank=True, null=True)
    com6ResLandLine = models.CharField(max_length=20, blank=True, null=True)
    com6MobileNumber = models.CharField(max_length=20, blank=True, null=True)
    com6Email = models.CharField(max_length=20, blank=True, null=True)
    com7Name = models.CharField(max_length=20, blank=True, null=True)
    com7PinCode = models.CharField(max_length=20, blank=True, null=True)
    com7address = models.CharField(max_length=100, blank=True, null=True)
    com7OffLandLine = models.CharField(max_length=20, blank=True, null=True)
    com7ResLandLine = models.CharField(max_length=20, blank=True, null=True)
    com7MobileNumber = models.CharField(max_length=20, blank=True, null=True)
    com7Email = models.CharField(max_length=20, blank=True, null=True)
    com8Name = models.CharField(max_length=20, blank=True, null=True)
    com8PinCode = models.CharField(max_length=20, blank=True, null=True)
    com8address = models.CharField(max_length=100, blank=True, null=True)
    com8OffLandLine = models.CharField(max_length=20, blank=True, null=True)
    com8ResLandLine = models.CharField(max_length=20, blank=True, null=True)
    com8MobileNumber = models.CharField(max_length=20, blank=True, null=True)
    com8Email = models.CharField(max_length=20, blank=True, null=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.regName + self.grpName


class GroupMembershipFormResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    gName = models.CharField(max_length=50, null=True, blank=True)
    memName = models.CharField(max_length=50, null=True, blank=True)
    memDob = models.CharField(max_length=50, null=True, blank=True)
    memEmail = models.CharField(max_length=50, null=True, blank=True)
    memMobNum = models.CharField(max_length=50, null=True, blank=True)
    memWhatsappNum = models.CharField(max_length=50, null=True, blank=True)
    memBloodGrp = models.CharField(max_length=50, null=True, blank=True)
    memMarried = models.CharField(max_length=50, null=True, blank=True)
    memBusiness = models.CharField(max_length=50, null=True, blank=True)
    memCoName = models.CharField(max_length=50, null=True, blank=True)
    memCoAddress = models.CharField(max_length=200, null=True, blank=True)
    memCoTele = models.CharField(max_length=50, null=True, blank=True)
    memResAddress = models.CharField(max_length=200, null=True, blank=True)
    memResTele = models.CharField(max_length=50, null=True, blank=True)
    spsName = models.CharField(max_length=50, null=True, blank=True)
    spsDob = models.CharField(max_length=50, null=True, blank=True)
    spsEmail = models.CharField(max_length=50, null=True, blank=True)
    spsMobNum = models.CharField(max_length=50, null=True, blank=True)
    spsWhatsaGrp = models.CharField(max_length=50, null=True, blank=True)
    spsAnnippNum = models.CharField(max_length=50, null=True, blank=True)
    spsBloodversary = models.CharField(max_length=50, null=True, blank=True)
    spsOccupation = models.CharField(max_length=50, null=True, blank=True)
    spsCoName = models.CharField(max_length=50, null=True, blank=True)
    spsCoAddress = models.CharField(max_length=200, null=True, blank=True)
    spsCoTele = models.CharField(max_length=50, null=True, blank=True)
    child1Name = models.CharField(max_length=50, null=True, blank=True)
    child1Sex = models.CharField(max_length=50, null=True, blank=True)
    child1Dob = models.CharField(max_length=50, null=True, blank=True)
    child1Email = models.CharField(max_length=50, null=True, blank=True)
    child1MobNum = models.CharField(max_length=50, null=True, blank=True)
    child1WhatsappNum = models.CharField(max_length=50, null=True, blank=True)
    child1BloodGrp = models.CharField(max_length=50, null=True, blank=True)
    child1BusinessEdu = models.CharField(max_length=50, null=True, blank=True)
    child1Marital = models.CharField(max_length=50, null=True, blank=True)
    child2Name = models.CharField(max_length=50, null=True, blank=True)
    child2Sex = models.CharField(max_length=50, null=True, blank=True)
    child2Dob = models.CharField(max_length=50, null=True, blank=True)
    child2Email = models.CharField(max_length=50, null=True, blank=True)
    child2MobNum = models.CharField(max_length=50, null=True, blank=True)
    child2WhatsappNum = models.CharField(max_length=50, null=True, blank=True)
    child2BloodGrp = models.CharField(max_length=50, null=True, blank=True)
    child2BusinessEdu = models.CharField(max_length=50, null=True, blank=True)
    child2Marital = models.CharField(max_length=50, null=True, blank=True)
    child3Name = models.CharField(max_length=50, null=True, blank=True)
    child3Sex = models.CharField(max_length=50, null=True, blank=True)
    child3Dob = models.CharField(max_length=50, null=True, blank=True)
    child3Email = models.CharField(max_length=50, null=True, blank=True)
    child3MobNum = models.CharField(max_length=50, null=True, blank=True)
    child3WhatsappNum = models.CharField(max_length=50, null=True, blank=True)
    child3BloodGrp = models.CharField(max_length=50, null=True, blank=True)
    child3BusinessEdu = models.CharField(max_length=50, null=True, blank=True)
    child3Marital = models.CharField(max_length=50, null=True, blank=True)
    emailList = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.grpName


class MbsNominationForm(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    fromName = models.CharField(max_length=50, null=True, blank=True)
    fromAddress = models.CharField(max_length=150, null=True, blank=True)
    fromContact = models.CharField(max_length=50, null=True, blank=True)
    fromMobile = models.CharField(max_length=50, null=True, blank=True)
    fromEmail = models.CharField(max_length=50, null=True, blank=True)
    fromDate = models.CharField(max_length=50, null=True, blank=True)
    welfareMembershipNum = models.CharField(
        max_length=50, null=True, blank=True)
    mbsMembershipNum = models.CharField(max_length=50, null=True, blank=True)
    memName = models.CharField(max_length=50, null=True, blank=True)
    memGroup = models.CharField(max_length=50, null=True, blank=True)
    nomineeName1 = models.CharField(max_length=50, null=True, blank=True)
    nomineeAddress1 = models.CharField(max_length=150, null=True, blank=True)
    nomineeRelation1 = models.CharField(max_length=50, null=True, blank=True)
    nomineeName2 = models.CharField(max_length=50, null=True, blank=True)
    nomineeAddress2 = models.CharField(max_length=150, null=True, blank=True)
    nomineeRelation2 = models.CharField(
        max_length=50, null=True, blank=True)
    changeMadeOn = models.CharField(max_length=50, null=True, blank=True)
    changeMadeAt = models.CharField(max_length=50, null=True, blank=True)
    changePresenceOf = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.memName
