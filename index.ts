export type handlingKeys = 'fMass' |
'fInitialDragCoeff' |
'fPercentSubmerged' |
'fDriveBiasFront' |
'nInitialDriveGears' |
'fInitialDriveForce' |
'fDriveInertia' |
'fClutchChangeRateScaleUpShift' |
'fClutchChangeRateScaleDownShift' |
'fInitialDriveMaxFlatVel' |
'fBrakeForce' |
'fBrakeBiasFront' |
'fHandBrakeForce' |
'fTractionCurveMax' |
'fTractionCurveMin' |
'fTractionCurveLateral' |
'fTractionSpringDeltaMax' |
'fLowSpeedTractionLossMult' |
'fCamberStiffness' |
'fTractionBiasFront' |
'fTractionLossMult' |
'fSuspensionForce' |
'fSuspensionCompDamp' |
'fSuspensionReboundDamp' |
'fSuspensionUpperLimit' |
'fSuspensionLowerLimit' |
'fSuspensionRaise' |
'fSuspensionBiasFront' |
'fAntiRollBarForce' |
'fAntiRollBarBiasFront' |
'fRollCentreHeightFront' |
'fRollCentreHeightRear' |
'fCollisionDamageMult' |
'fWeaponDamageMult' |
'fDeformationDamageMult' |
'fEngineDamageMult' |
'fPetrolTankVolume' |
'fOilVolume' | 
'fSteeringLock';

function fixHandling(vehicle: VehicleMp){
    if(vehicle === undefined || vehicle.handle === 0) return;
    vehicle.setMod(11, vehicle.getMod(11));
    mp.game.vehicle.modifyTopSpeed(vehicle.handle, 1.0);
    vehicle.setEnginePowerMultiplier(1.0);
    vehicle.setEngineTorqueMultiplier(1.0);
    mp.game.vehicle.setCheatPowerIncrease(vehicle.handle, 1.0);
}
function setHandling(vehicle:VehicleMp, key: handlingKeys, value: any) {
    if(vehicle === undefined || vehicle.handle === 0) return;
    switch(key) {
        case 'fInitialDragCoeff': vehicle.setHandling(key, value / 10000); break;
        case 'fDriveBiasFront': vehicle.setHandling(key, value * 2); break;
        case 'fInitialDriveMaxFlatVel': vehicle.setHandling(key, value / 3.6); break;
        case 'fBrakeBiasFront': vehicle.setHandling(key, value * 2); break;
        case 'fTractionCurveLateral': vehicle.setHandling(key, value * 0.017453292); break;
        case 'fTractionBiasFront': vehicle.setHandling(key, value * 2); break;
        case 'fSuspensionCompDamp': vehicle.setHandling(key, value / 10); break;
        case 'fSuspensionReboundDamp': vehicle.setHandling(key, value / 10); break;
        case 'fSuspensionBiasFront': vehicle.setHandling(key, value * 2); break;
        case 'fAntiRollBarBiasFront': vehicle.setHandling(key, value * 2); break;
        case 'fSteeringLock': vehicle.setHandling(key, value * 0.017453292); break;
        default: vehicle.setHandling(key, value); break;
    }
    fixHandling(vehicle);
}
function getHandling(vehicle: VehicleMp, key: handlingKeys) : string | number {
    if(vehicle === undefined || vehicle.handle === 0) return -1;
    switch(key){
        case 'fInitialDragCoeff': return (vehicle.getHandling(key) as any) * 10000;
        case 'fDriveBiasFront': return (vehicle.getHandling(key) as any) / 2;
        case 'fInitialDriveMaxFlatVel': return (vehicle.getHandling(key) as any) * 3.6;
        case 'fBrakeBiasFront': return (vehicle.getHandling(key) as any) / 2;
        case 'fTractionCurveLateral': return (vehicle.getHandling(key) as any) / 0.017453292;
        case 'fTractionBiasFront': return (vehicle.getHandling(key) as any) / 2;
        case 'fSuspensionCompDamp': return (vehicle.getHandling(key) as any) * 10;
        case 'fSuspensionReboundDamp': return (vehicle.getHandling(key) as any) * 10;
        case 'fSuspensionBiasFront': return (vehicle.getHandling(key) as any) / 2;
        case 'fAntiRollBarBiasFront': return (vehicle.getHandling(key) as any) / 2;
        case 'fSteeringLock': return (vehicle.getHandling(key) as any) / 0.017453292;
        default: return vehicle.getHandling(key);
    }
}

export {
    fixHandling,
    getHandling,
    setHandling
}
