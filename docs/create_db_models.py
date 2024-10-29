# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Float, DateTime, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

# Create a base class for model definitions
Base = declarative_base()

# Table Definitions

class Family(Base):
    """description: Stores details about different families planning holidays."""
    __tablename__ = 'family'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    motto = Column(String)

class FamilyMember(Base):
    """description: Represents members of each family."""
    __tablename__ = 'family_member'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    age = Column(Integer, nullable=True)
    family_id = Column(Integer, ForeignKey('family.id'), nullable=False)

class Location(Base):
    """description: Details about the holiday locations."""
    __tablename__ = 'location'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(Text)

class Accommodation(Base):
    """description: Accommodation options available at different locations."""
    __tablename__ = 'accommodation'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    location_id = Column(Integer, ForeignKey('location.id'), nullable=False)
    price_per_night = Column(Float, nullable=False)

class Activity(Base):
    """description: Activities available during the holiday."""
    __tablename__ = 'activity'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    location_id = Column(Integer, ForeignKey('location.id'), nullable=False)
    cost = Column(Float, nullable=True)

class Booking(Base):
    """description: Records of house bookings by families."""
    __tablename__ = 'booking'
    id = Column(Integer, primary_key=True, autoincrement=True)
    family_id = Column(Integer, ForeignKey('family.id'), nullable=False)
    accommodation_id = Column(Integer, ForeignKey('accommodation.id'), nullable=False)
    check_in_date = Column(DateTime, nullable=False)
    check_out_date = Column(DateTime, nullable=False)

class ActivityBooking(Base):
    """description: Activity booking details for family members."""
    __tablename__ = 'activity_booking'
    id = Column(Integer, primary_key=True, autoincrement=True)
    family_member_id = Column(Integer, ForeignKey('family_member.id'), nullable=False)
    activity_id = Column(Integer, ForeignKey('activity.id'), nullable=False)
    booking_date = Column(DateTime, nullable=False)

class Event(Base):
    """description: Special events planned during the holiday."""
    __tablename__ = 'event'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    location_id = Column(Integer, ForeignKey('location.id'), nullable=False)
    event_date = Column(DateTime, nullable=False)

class Attendee(Base):
    """description: Tracks attendees for each event."""
    __tablename__ = 'attendee'
    id = Column(Integer, primary_key=True, autoincrement=True)
    event_id = Column(Integer, ForeignKey('event.id'), nullable=False)
    family_member_id = Column(Integer, ForeignKey('family_member.id'), nullable=False)

class Package(Base):
    """description: Holiday package deals offered to families."""
    __tablename__ = 'package'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(Text)
    price = Column(Float, nullable=False)

class PackageBooking(Base):
    """description: Records of package deal bookings by families."""
    __tablename__ = 'package_booking'
    id = Column(Integer, primary_key=True, autoincrement=True)
    package_id = Column(Integer, ForeignKey('package.id'), nullable=False)
    family_id = Column(Integer, ForeignKey('family.id'), nullable=False)
    booking_date = Column(DateTime, nullable=False)

class Review(Base):
    """description: Reviews left by families and members on activities or accommodations."""
    __tablename__ = 'review'
    id = Column(Integer, primary_key=True, autoincrement=True)
    family_member_id = Column(Integer, ForeignKey('family_member.id'), nullable=False)
    accommodation_id = Column(Integer, ForeignKey('accommodation.id'), nullable=True)
    activity_id = Column(Integer, ForeignKey('activity.id'), nullable=True)
    comments = Column(Text, nullable=True)
    rating = Column(Float, nullable=True)

# Create engine and session
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

# Sample Data Insertions

# Families
family1 = Family(name="Flintstones", motto="Yabba Dabba Doo!")
family2 = Family(name="Rubbles", motto="Rock Solid!")

# Family Members
member1 = FamilyMember(name="Fred Flintstone", age=36, family_id=1)
member2 = FamilyMember(name="Wilma Flintstone", age=34, family_id=1)
member3 = FamilyMember(name="Barney Rubble", age=38, family_id=2)
member4 = FamilyMember(name="Betty Rubble", age=34, family_id=2)

# Locations
location1 = Location(name="Bedrock", description="The prehistoric town full of fun!")
location2 = Location(name="Rock Vegas", description="Glamour and excitement in prehistoric times.")

# Accommodations
accommodation1 = Accommodation(name="The Great Gazoo Hotel", location_id=1, price_per_night=150.00)
accommodation2 = Accommodation(name="Dino Resort", location_id=2, price_per_night=200.00)

# Activities
activity1 = Activity(name="Bowling", location_id=1, cost=10.00)
activity2 = Activity(name="Dinosaur Ride", location_id=2, cost=20.00)

# Bookings
booking1 = Booking(family_id=1, accommodation_id=1, check_in_date=datetime.datetime(2023, 12, 1), check_out_date=datetime.datetime(2023, 12, 7))
booking2 = Booking(family_id=2, accommodation_id=2, check_in_date=datetime.datetime(2023, 12, 10), check_out_date=datetime.datetime(2023, 12, 15))

# Activity Bookings
activity_booking1 = ActivityBooking(family_member_id=1, activity_id=1, booking_date=datetime.datetime(2023, 12, 2))
activity_booking2 = ActivityBooking(family_member_id=2, activity_id=2, booking_date=datetime.datetime(2023, 12, 3))

# Events
event1 = Event(name="Rock Concert", location_id=1, event_date=datetime.datetime(2023, 12, 5))
event2 = Event(name="Caveman Olympics", location_id=2, event_date=datetime.datetime(2023, 12, 12))

# Attendees
attendee1 = Attendee(event_id=1, family_member_id=1)
attendee2 = Attendee(event_id=2, family_member_id=3)

# Packages
package1 = Package(name="Family Fun Package", description="Includes accommodation, meals, and two activities", price=500.00)
package2 = Package(name="Adventure Package", description="Includes accommodation and all adventure activities", price=600.00)

# Package Bookings
package_booking1 = PackageBooking(package_id=1, family_id=1, booking_date=datetime.datetime(2023, 11, 15))
package_booking2 = PackageBooking(package_id=2, family_id=2, booking_date=datetime.datetime(2023, 11, 20))

# Reviews
review1 = Review(family_member_id=1, accommodation_id=1, comments="Loved the stay!", rating=4.5)
review2 = Review(family_member_id=3, activity_id=2, comments="Super fun activity!", rating=4.7)

# Add all entries to session and commit
session.add_all([
    family1, family2,
    member1, member2, member3, member4,
    location1, location2,
    accommodation1, accommodation2,
    activity1, activity2,
    booking1, booking2,
    activity_booking1, activity_booking2,
    event1, event2,
    attendee1, attendee2,
    package1, package2,
    package_booking1, package_booking2,
    review1, review2
])

session.commit()
session.close()
