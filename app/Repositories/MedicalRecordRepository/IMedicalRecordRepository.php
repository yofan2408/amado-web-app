<?php

namespace App\Repositories\MedicalRecordRepository;

interface IMedicalRecordRepository
{
    function getAll($patient_id): array;
    function getMonitoringResult($patient_id): array;
    function save($patient_id, $avgSpo2, $avgbpm, $status, $recomendation, $lastCode);
    function update($patient_id);
}
