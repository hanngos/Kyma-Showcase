// Code generated by mockery 2.9.0. DO NOT EDIT.

package mocks

import (
	model "github.com/kyma-incubator/Kyma-Showcase/internal/model"
	mock "github.com/stretchr/testify/mock"
)

// EventFactory is an autogenerated mock type for the EventFactory type
type EventFactory struct {
	mock.Mock
}

// NewEvent provides a mock function with given fields: id
func (_m *EventFactory) NewEvent(id string) model.Event {
	ret := _m.Called(id)

	var r0 model.Event
	if rf, ok := ret.Get(0).(func(string) model.Event); ok {
		r0 = rf(id)
	} else {
		r0 = ret.Get(0).(model.Event)
	}

	return r0
}