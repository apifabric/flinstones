# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 29, 2024 11:12:48
# Database: sqlite:////tmp/tmp.o6MkdIK5At/flinstones/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Family(SAFRSBaseX, Base):
    """
    description: Stores details about different families planning holidays.
    """
    __tablename__ = 'family'
    _s_collection_name = 'Family'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    motto = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    FamilyMemberList : Mapped[List["FamilyMember"]] = relationship(back_populates="family")
    PackageBookingList : Mapped[List["PackageBooking"]] = relationship(back_populates="family")
    BookingList : Mapped[List["Booking"]] = relationship(back_populates="family")



class Location(SAFRSBaseX, Base):
    """
    description: Details about the holiday locations.
    """
    __tablename__ = 'location'
    _s_collection_name = 'Location'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)
    AccommodationList : Mapped[List["Accommodation"]] = relationship(back_populates="location")
    ActivityList : Mapped[List["Activity"]] = relationship(back_populates="location")
    EventList : Mapped[List["Event"]] = relationship(back_populates="location")



class Package(SAFRSBaseX, Base):
    """
    description: Holiday package deals offered to families.
    """
    __tablename__ = 'package'
    _s_collection_name = 'Package'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(Text)
    price = Column(Float, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    PackageBookingList : Mapped[List["PackageBooking"]] = relationship(back_populates="package")



class Accommodation(SAFRSBaseX, Base):
    """
    description: Accommodation options available at different locations.
    """
    __tablename__ = 'accommodation'
    _s_collection_name = 'Accommodation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    location_id = Column(ForeignKey('location.id'), nullable=False)
    price_per_night = Column(Float, nullable=False)

    # parent relationships (access parent)
    location : Mapped["Location"] = relationship(back_populates=("AccommodationList"))

    # child relationships (access children)
    BookingList : Mapped[List["Booking"]] = relationship(back_populates="accommodation")
    ReviewList : Mapped[List["Review"]] = relationship(back_populates="accommodation")



class Activity(SAFRSBaseX, Base):
    """
    description: Activities available during the holiday.
    """
    __tablename__ = 'activity'
    _s_collection_name = 'Activity'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    location_id = Column(ForeignKey('location.id'), nullable=False)
    cost = Column(Float)

    # parent relationships (access parent)
    location : Mapped["Location"] = relationship(back_populates=("ActivityList"))

    # child relationships (access children)
    ActivityBookingList : Mapped[List["ActivityBooking"]] = relationship(back_populates="activity")
    ReviewList : Mapped[List["Review"]] = relationship(back_populates="activity")



class Event(SAFRSBaseX, Base):
    """
    description: Special events planned during the holiday.
    """
    __tablename__ = 'event'
    _s_collection_name = 'Event'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    location_id = Column(ForeignKey('location.id'), nullable=False)
    event_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    location : Mapped["Location"] = relationship(back_populates=("EventList"))

    # child relationships (access children)
    AttendeeList : Mapped[List["Attendee"]] = relationship(back_populates="event")



class FamilyMember(SAFRSBaseX, Base):
    """
    description: Represents members of each family.
    """
    __tablename__ = 'family_member'
    _s_collection_name = 'FamilyMember'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    age = Column(Integer)
    family_id = Column(ForeignKey('family.id'), nullable=False)

    # parent relationships (access parent)
    family : Mapped["Family"] = relationship(back_populates=("FamilyMemberList"))

    # child relationships (access children)
    ActivityBookingList : Mapped[List["ActivityBooking"]] = relationship(back_populates="family_member")
    AttendeeList : Mapped[List["Attendee"]] = relationship(back_populates="family_member")
    ReviewList : Mapped[List["Review"]] = relationship(back_populates="family_member")



class PackageBooking(SAFRSBaseX, Base):
    """
    description: Records of package deal bookings by families.
    """
    __tablename__ = 'package_booking'
    _s_collection_name = 'PackageBooking'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    package_id = Column(ForeignKey('package.id'), nullable=False)
    family_id = Column(ForeignKey('family.id'), nullable=False)
    booking_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    family : Mapped["Family"] = relationship(back_populates=("PackageBookingList"))
    package : Mapped["Package"] = relationship(back_populates=("PackageBookingList"))

    # child relationships (access children)



class ActivityBooking(SAFRSBaseX, Base):
    """
    description: Activity booking details for family members.
    """
    __tablename__ = 'activity_booking'
    _s_collection_name = 'ActivityBooking'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    family_member_id = Column(ForeignKey('family_member.id'), nullable=False)
    activity_id = Column(ForeignKey('activity.id'), nullable=False)
    booking_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    activity : Mapped["Activity"] = relationship(back_populates=("ActivityBookingList"))
    family_member : Mapped["FamilyMember"] = relationship(back_populates=("ActivityBookingList"))

    # child relationships (access children)



class Attendee(SAFRSBaseX, Base):
    """
    description: Tracks attendees for each event.
    """
    __tablename__ = 'attendee'
    _s_collection_name = 'Attendee'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    event_id = Column(ForeignKey('event.id'), nullable=False)
    family_member_id = Column(ForeignKey('family_member.id'), nullable=False)

    # parent relationships (access parent)
    event : Mapped["Event"] = relationship(back_populates=("AttendeeList"))
    family_member : Mapped["FamilyMember"] = relationship(back_populates=("AttendeeList"))

    # child relationships (access children)



class Booking(SAFRSBaseX, Base):
    """
    description: Records of house bookings by families.
    """
    __tablename__ = 'booking'
    _s_collection_name = 'Booking'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    family_id = Column(ForeignKey('family.id'), nullable=False)
    accommodation_id = Column(ForeignKey('accommodation.id'), nullable=False)
    check_in_date = Column(DateTime, nullable=False)
    check_out_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    accommodation : Mapped["Accommodation"] = relationship(back_populates=("BookingList"))
    family : Mapped["Family"] = relationship(back_populates=("BookingList"))

    # child relationships (access children)



class Review(SAFRSBaseX, Base):
    """
    description: Reviews left by families and members on activities or accommodations.
    """
    __tablename__ = 'review'
    _s_collection_name = 'Review'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    family_member_id = Column(ForeignKey('family_member.id'), nullable=False)
    accommodation_id = Column(ForeignKey('accommodation.id'))
    activity_id = Column(ForeignKey('activity.id'))
    comments = Column(Text)
    rating = Column(Float)

    # parent relationships (access parent)
    accommodation : Mapped["Accommodation"] = relationship(back_populates=("ReviewList"))
    activity : Mapped["Activity"] = relationship(back_populates=("ReviewList"))
    family_member : Mapped["FamilyMember"] = relationship(back_populates=("ReviewList"))

    # child relationships (access children)
